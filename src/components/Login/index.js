// @flow

import React from 'react';
import styled from 'styled-components';

import LoginCard from './LoginCard';

const LoginPageWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  
  align-items: center;
  justify-content: center;
`;

const LoginPage = () => (
  <LoginPageWrapper>
    <LoginCard />
  </LoginPageWrapper>
);

export default LoginPage;