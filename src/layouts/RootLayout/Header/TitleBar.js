import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import shareIcon from '@/assets/share.webp';
import Image from 'next/image';
import { nativeConnector } from '@/lib/native';
import { isPine } from '@/lib/utils';

export default function TitleBar(props) {
  const { title } = props;

  const handleShare = () => {
    const ogUrlMetaTag = document.querySelector('meta[property="og:url"]');
    console.log(ogUrlMetaTag);

    if (ogUrlMetaTag) {
      const ogUrl = ogUrlMetaTag.getAttribute('content');
      if (isPine()) {
        // 공유하기 이벤트 트래킹
        nativeConnector.sendAppsFlyerLog('af_content_view', {
          af_content_id: ogUrl,
          af_action_type: 'share',
        });

        nativeConnector.shareContents(ogUrl + '&referrer=share');
      }
    } else {
      alert('문제가 발생하였습니다. 잠시후 다시 시도해주세요.');
    }
  };

  return (
    <>
      <AppBar>
        <Toolbar
          sx={{ px: 2.5, display: 'flex', justifyContent: 'space-between' }}
        >
          <div className=" items-center flex">
            <SvgIcon {...props} sx={{ width: 40, height: 40 }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="icon_back"
                  d="M17.9992 11.4L9.19922 20.1175L17.9992 29"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </SvgIcon>
            <Typography variant="h4" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
          </div>
          {props.share === 'y' && (
            <div className=" w-[24px] h-[24px] cursor-pointer">
              <Image
                src={shareIcon}
                alt="공유하기 아이콘"
                width={24}
                height={24}
                className=" active:"
                onClick={handleShare}
              />
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
