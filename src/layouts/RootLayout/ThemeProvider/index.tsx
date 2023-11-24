import { Global } from './Global';
import { ThemeProvider as _ThemProvider } from '@mui/material/styles';
import theme from '@/component/theme';

type Props = {
  children?: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <_ThemProvider theme={theme}>
      <Global />
      {children}
    </_ThemProvider>
  );
};
