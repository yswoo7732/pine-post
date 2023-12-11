import React, { ReactNode } from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import { ThemeProvider } from './ThemeProvider';
import Scripts from './Scripts';
import { useRouter } from 'next/router';
import { isPine } from '@/lib/utils';

type Props = {
  children: ReactNode;
  title: any;
};

interface mainProps {
  margin?: string;
}

const RootLayout = ({ children, title }: Props) => {
  const router = useRouter();
  const { referrer } = router.query;

  return (
    <ThemeProvider>
      {/* <Scripts /> */}
      {referrer !== 'share' && <Header fullWidth={false} title={title} />}
      <StyledMain>{children}</StyledMain>
    </ThemeProvider>
  );
};

export default RootLayout;

const StyledMain = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 840px;
  margin-top: 70px;
`;
