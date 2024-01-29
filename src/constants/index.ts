import { isPine } from '@/lib/utils';
import { v4 as uuidv4 } from 'uuid'; // UUID 생성을 위한 라이브러리 사용

export const APP_LINK = isPine() ? 'hamcpine://share?&what' : '';
export const APP_LINK_WEB = isPine() ? `hamcpine://share?&what=web&value=${document.location.origin}` : '';
export const WEB_LINK = 'https://pine.onelink.me/vnSX/zp4sz8vu'; // 공유된 컨텐츠 하단에 들어갈 원링크

export function generateUniqueTransactionId() {
  // Generate a version 4 (random) UUID
  return uuidv4();
}
