// components/MoreLinkButton.js
import Link from 'next/link';

const MoreLinkButton = ({ href }) => {
  return (
    <Link className=" h-15 border-t border-neutral-20  w-full " href={href}>
      <span className="block text-center mt-2 py-5 border-t-neutral-20 border-t active:bg-neutral-10 text-green-100 font-bold">
        더 보기
      </span>
    </Link>
  );
};

export default MoreLinkButton;
