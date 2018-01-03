import React from 'react';
import styled from 'styled-components';

import { PRIMARY_COLOR } from '../../theme/index';

const VerticalTimelineLine = styled.div`
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: -5px;
    height: 100%;
    width: 2px;
    background: #f1f1f1;
  }
`;

const VerticalTimelineBadge = styled.div` 
  &:after {
    content: '';
    position: absolute;
    left: -9px;
    top: 16px;
    background-color: #8693aa;
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
`;

const VerticalTimeLineContentWrapper = styled.div`
  padding: 12px;
`;

const VerticalTimeline = ({ children }) => (
  <div style={{ position: 'relative' }}>
    <VerticalTimelineLine />
    <VerticalTimelineBadge />

    <VerticalTimeLineContentWrapper>
      {children}
    </VerticalTimeLineContentWrapper>
  </div>
);

export default VerticalTimeline;
