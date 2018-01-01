// @flow

import React from 'react';
import styled from 'styled-components';
import ProjectIcon from 'react-icons/lib/md/folder';
import type { ComponentType } from 'react';

import UserAvatar from './Reusable/UserAvatar';
import Select from './Reusable/Select';
import { PRIMARY_COLOR } from '../theme/index';

const HeaderWrapperView: ComponentType<{}> = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  background-color: ${PRIMARY_COLOR};
  width: 100%;
  height: 54px;
  padding: 10px;
  box-shadow: 0 1px 2px #aaa;
`;

const AppTitle: ComponentType<{}> = styled.h1`
  margin: 0;
  color: #fff;
`;

const RightHeaderSection: ComponentType<{}> = styled.div`
  display: flex;
  align-items: center;
`;

const LeftHeaderSection: ComponentType<{}> = styled.div`
  display: flex;
  align-items: center;
`;

const ProjectSelectWrapper: ComponentType<{}> = styled.div`
  margin-left: 16px;
  height: 100%;
`;

const UserMainInfo: ComponentType<{}> = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 8px;
`;

const UserEmail: ComponentType<{}> = styled.span`
  color: #ddd;
  font-size: 12px;
`;

const UserName: ComponentType<{}> = styled.span`
  font-weight: bold;
  color: #fff;
  font-size: 14px;
`;

const mockedOptionsList = [
  { body: 'Trellolo frontend' },
  { body: 'Trellolo backend' },
  { body: 'Trellolo frontend' },
  { body: 'Trellolo backend' },
];

const Header = () => (
  <HeaderWrapperView>
    <LeftHeaderSection>
      <AppTitle>Trellolo</AppTitle>

      <ProjectSelectWrapper>
        <Select list={mockedOptionsList}/>
      </ProjectSelectWrapper>
    </LeftHeaderSection>

    <RightHeaderSection>
      <UserMainInfo>
        <UserName>Slaventy</UserName>
        <UserEmail>electricsemyon@gmail.com</UserEmail>
      </UserMainInfo>
      <UserAvatar src={'https://randomuser.me/api/portraits/men/89.jpg'} width={40} height={40} />
    </RightHeaderSection>
  </HeaderWrapperView>
);

export default Header;