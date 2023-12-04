import TitleBar from './TitleBar';
import { useRouter } from 'next/router';
import { nativeConnector } from '@/lib/native';
import { isPine } from '@/lib/utils';
import { useEffect, useState } from 'react';

type Props = {
  fullWidth: boolean;
  title: any;
};

const Header: React.FC<Props> = ({ fullWidth, title }) => {
  const router = useRouter();
  const [startTime, setStartTime] = useState(0);

  useEffect(() => {
    setStartTime(performance.now());

    return () => {
      setStartTime(0);
    };
  }, []);

  const handleGoBack = () => {
    if (isPine()) {
      const elapsedTime = startTime
        ? (performance.now() - startTime) / 1000
        : 'N/A';
      const ogUrlMetaTag = document.querySelector('meta[property="og:url"]');

      if (ogUrlMetaTag) {
        // 이벤트 트래킹
        nativeConnector.sendAppsFlyerLog('af_content_view', {
          af_content_id: ogUrlMetaTag,
          af_elapsed_time: elapsedTime,
        });
      }
    }
    router.back();
  };

  // console.log(title);
  const handleClick = () => {
    Object.entries(router.query).length === 0
      ? nativeConnector.requestExitMenu()
      : handleGoBack();
  };

  return (
    <div data-full-width={fullWidth} className="container">
      <TitleBar title={title.text} {...title.props} onClick={handleClick} />
    </div>
  );
};

export default Header;
