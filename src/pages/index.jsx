import { generateUniqueTransactionId } from "../transactionId";

const requestId = generateUniqueTransactionId();

export default function Home({ requestId }) {
  console.log(`[${requestId}] getServerSideProps2`);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export async function getServerSideProps() {
  // 처음 요청일 때 로그 출력
  console.log(`[${requestId}] getServerSideProps1`);

  return {
    props: {
      requestId,
    },
  };
}
