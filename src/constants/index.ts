import { isPine } from '@/lib/utils';

export const APP_LINK = isPine() ? 'hamcpine://share?&what' : '';
export const APP_LINK_WEB = isPine() ? 'hamcpine://share?&what=web&value=' : '';
