import React, { ReactNode } from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import { ThemeProvider } from './ThemeProvider';
import Scripts from './Scripts';
import { useRouter } from 'next/router';

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
  console.log(referrer);

  return (
    <ThemeProvider>
      {/* <Scripts /> */}
      {referrer !== 'share' && <Header fullWidth={false} title={title} />}
      <StyledMain margin={referrer !== 'share' ? '70px' : '0'}>
        {children}
      </StyledMain>
    </ThemeProvider>
  );
};

export default RootLayout;

const StyledMain = styled.main<mainProps>`
  margin: 0 auto;
  width: 100%;
  max-width: 840px;
  margin-top: ${props => props.margin || '0'};
`;
