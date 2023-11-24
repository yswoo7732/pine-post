import React from 'react';
import errorImg from '@/assets/img500@2x.png';
import Image from 'next/image';

type Props = {};

const CustomError: React.FC<Props> = () => {
  return (
    <div className="flex items-center pt-12 font-bold flex-col">
      <Image
        src={errorImg}
        alt="나의 투자메이트, PINE"
        className="mb-2"
        width={70}
        height={70}
      />
      <h3 className="mt-10">데이터를 불러오지 못했습니다.</h3>
      <h3>잠시 후 다시 시도해 주세요.</h3>
    </div>
  );
};
export default CustomError;
