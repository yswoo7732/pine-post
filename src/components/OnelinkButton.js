// 컨텐츠 공유 됐을때 하단에 배치될 원링크(딥링킹) 버튼 - 인앱 아닐 경우
const OnelinkButton = ({ onClick, text }) => {
  return (
    <button
      className=" bg-neutral-100 text-center text-neutral-10 h-15 rounded-[10px] min-w-full active:bg-neutral-90"
      onClick={onClick}
    >
      {text ?? '더 많은 컨텐츠 보기'}
    </button>
  );
};

export default OnelinkButton;
