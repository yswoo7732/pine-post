// transactionId.js
import { v4 as uuidv4 } from 'uuid';

let currentRequestId = null;

export function generateUniqueTransactionId() {
  // 서버 측에서 요청이 없는 경우 또는 처음 요청인 경우 새로운 UUID 생성
  if (!currentRequestId) {
    currentRequestId = uuidv4();
  }

  return currentRequestId;
}
