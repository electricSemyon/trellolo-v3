// @flow

import React from 'react';
import styled from 'styled-components';
import GoogleIcon from 'react-icons/lib/fa/google';
import GithubIcon from 'react-icons/lib/fa/github';
import type { ComponentType } from 'react';

import Card from '../Reusable/Card';
import Button from '../Reusable/Button';
import TextField from '../Reusable/TextField';
import Link from '../Reusable/Link';

const LoginCardWrapper: ComponentType<{}> = styled.div`
  width: 30%;
  margin-top: -190px;
`;

const LoginCardHeader: ComponentType<{}> = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${props => props.theme.PRIMARY_COLOR};
  text-align: left;
  padding: 4px;
  box-sizing: border-box;
  padding-left: 16px;
`;

const LoginCardTitle: ComponentType<{}> = styled.h2`
  font-weight: 500;
  color: #fff;
`;

const LoginCardContainer: ComponentType<{}> = styled.div`
  width: 100%;
  height: 100%;
  padding: 32px;
  box-sizing: border-box;
  text-align: left;
`;

const FieldContainer: ComponentType<{}> = styled.div`
  margin-bottom: 16px;
`;

const ButtonContainer: ComponentType<{}> = styled.div`
  margin-top: 16px;
`;

const SignUpContainer: ComponentType<{}> = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-top: 12px;
`;

const LoginPage = () => (
  <LoginCardWrapper>
    <Card elevation={2} fullWidth fullHeight noPadding>
      <LoginCardHeader>
        <LoginCardTitle>
          LOG IN
        </LoginCardTitle>
      </LoginCardHeader>

      <LoginCardContainer>
        <FieldContainer>
          <TextField fullWidth placeholder="User email" type="email" required />
        </FieldContainer>

        <FieldContainer>
          <TextField fullWidth placeholder="User password" type="password" required />
        </FieldContainer>

        <ButtonContainer>
          <Button fullWidth>
            LOGIN
          </Button>
        </ButtonContainer>

        <ButtonContainer>
          <a href="/auth/google">
            <Button fullWidth>
              <GoogleIcon style={{marginRight: 8}} />
              LOGIN WITH GOOGLE
            </Button>
          </a>
        </ButtonContainer>

        <ButtonContainer>
          <a href="/auth/github">
            <Button fullWidth>
              <GithubIcon style={{marginRight: 8}} />
              LOGIN WITH GITHUB
            </Button>
          </a>
        </ButtonContainer>

        <SignUpContainer>
          <span>
            Have no account yet? You can <Link href="/signup">sign up</Link>.
          </span>
        </SignUpContainer>
      </LoginCardContainer>
    </Card>
  </LoginCardWrapper>
);

export default LoginPage;
