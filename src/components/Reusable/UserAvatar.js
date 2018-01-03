import React from 'react';
import styled from 'styled-components';

const AvatarView = styled.img`
   border-radius: 50%;
`;

const Avatar = props =>
  <AvatarView {...props} />;

export default Avatar;
