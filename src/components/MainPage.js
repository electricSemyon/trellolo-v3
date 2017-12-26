import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Drawer from './Reusable/Drawer';
import Button from './Reusable/ButtonBase';

import ProjectPageIcon from 'react-icons/lib/fa/odnoklassniki-square';
import MenuIcon from 'react-icons/lib/md/menu';
import BoardsIcon from 'react-icons/lib/md/developer-board';
import SettingsIcon from 'react-icons/lib/md/settings';
import HomeIcon from 'react-icons/lib/md/home';

import ProjectPage from './ProjectPage';

const ButtonIcon = styled.div`
  color: #8693aa;
  margin-right: 12px;
  
  transition: all .2s ease-out;
  &:hover {
    color: #5b71a0;
  }
`;

const MenuItemText = styled.span`
  font-weight: bold;
  color: #8693aa;
`;

const MenuItemContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 150px;
  padding-left: 5px;
  padding-right: 5px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MenuItem = ({icon, title, onClick}) => (
    <Button onClick={onClick}>
      <MenuItemContent>
        <ButtonIcon>
          {icon}
        </ButtonIcon>
        <MenuItemText>{ title }</MenuItemText>
      </MenuItemContent>
    </Button>
);

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false,
    }
  }

  toggleMenu = () => this.setState({opened: !this.state.opened});

  render() {
    return (
      <div>
        <Header />
        <ContentWrapper>
          <Drawer isOpened={this.state.opened} style={{overflow: 'hidden'}}>
            <MenuItem
              icon={<MenuIcon size={25}/>}
              onClick={this.toggleMenu}
            />

            <hr style={{width: '100%', margin: 0}} />

            <MenuItem
              icon={<HomeIcon size={25}/>}
              onClick={() => {}}
              title={'Project Page'}
            />

            <MenuItem
              icon={<BoardsIcon size={25}/>}
              onClick={() => {}}
              title={'Boards'}
            />

            <MenuItem
              icon={<SettingsIcon size={25}/>}
              onClick={() => {}}
              title={'Settings'}
            />
          </Drawer>

          <ProjectPage />
        </ContentWrapper>
      </div>
    );
  }
}

export default MainPage;