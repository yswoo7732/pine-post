import { isPine } from '@/lib/utils';

export const APP_LINK = isPine() ? 'hamcpine://share?&what' : '';
export const APP_LINK_WEB = isPine() ? 'hamcpine://share?&what=web&value=' : '';
export const WEB_LINK = 'https://pine.onelink.me/vnSX/zp4sz8vu'; // 공유된 컨텐츠 하단에 들어갈 원링크
