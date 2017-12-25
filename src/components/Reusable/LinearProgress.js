import React from 'react';
import styled, { keyframes } from 'styled-components';

const defaultHeight = 4;

const LinerProgressWrapper = styled.div`
  width: 100%;
  height: ${props => props.height || defaultHeight}px;
  background-color: #c4d2f3;
  overflow: hidden;
`;

const LinearProgressBar1 = styled.div`
  width: 20%;
  height: ${props => props.height || defaultHeight}px;
  background-color: ${props => props.theme.PRIMARY_COLOR};
  animation: ${() => LinearProgressBarAnimation} 3s 0s infinite;
`;

const LinearProgressBarAnimation = keyframes`
  0% { width: 100%; margin-left: -500px }
  50% { width: 30%; margin-left: 50px; }
  100% { width: 100%; margin-left: 500px; }
`;

const LinearProgress = () => (
  <LinerProgressWrapper>
    <LinearProgressBar1 />
  </LinerProgressWrapper>
);

export default LinearProgress;