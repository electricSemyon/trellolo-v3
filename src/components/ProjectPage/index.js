import React from 'react';
import styled from 'styled-components';

import Card from '../Card';
import { List, ListItem } from '../List';
import UserAvatar from '../UserAvatar';
import VerticalTimeline from '../Timeline';

const ProjectPageWrapper = styled.div`
  padding: 16px;
  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 300px;
  grid-gap:1em;
  justify-items:stretch;
  align-items:stretch;
`;

class ProjectPage extends React.Component {
  render() {
    return (
      <ProjectPageWrapper>

        <div style={{gridColumn: '1/3'}}>
          <Card fullHeight style={{overflow: 'hidden'}}>
            <h3>Trellolo front-end</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid aut blanditiis, cum distinctio error illo illum, incidunt laborum mollitia nesciunt obcaecati porro quidem quisquam sint sunt tempora veritatis vitae.</p>
          </Card>
        </div>

        <div style={{gridColumn: '3/5'}}>
          <Card fullHeight style={{overflowY: 'scroll'}}>
            <h3>Members List</h3>
            <List>
              <ListItem>
                <UserAvatar src={'https://randomuser.me/api/portraits/men/89.jpg'} width={40} height={40} />
                <span style={{marginLeft: 12}}>User1</span>
              </ListItem>
              <ListItem>
                <UserAvatar src={'https://randomuser.me/api/portraits/men/89.jpg'} width={40} height={40} />
                <span style={{marginLeft: 12}}>User1</span>
              </ListItem>
              <ListItem>
                <UserAvatar src={'https://randomuser.me/api/portraits/men/89.jpg'} width={40} height={40} />
                <span style={{marginLeft: 12}}>User1</span>
              </ListItem>
              <ListItem>
                <UserAvatar src={'https://randomuser.me/api/portraits/men/89.jpg'} width={40} height={40} />
                <span style={{marginLeft: 12}}>User1</span>
              </ListItem>
              <ListItem>
                <UserAvatar src={'https://randomuser.me/api/portraits/men/89.jpg'} width={40} height={40} />
                <span style={{marginLeft: 12}}>User1</span>
              </ListItem>
            </List>
          </Card>
        </div>

        <div style={{gridColumn: '1/2'}}>
          <Card fullHeight style={{overflowY: 'scroll'}}>
            <div style={{position: 'relative', padding: 16}}>
              <VerticalTimeline><a href="">Lorem ipsum</a> dolor sit amet, consectetur elitadipisicingc onsectetur adipisicing elit. Fugit, reprehenderit.</VerticalTimeline>
              <VerticalTimeline>Lorem <a href="">ipsum</a> dolor sit amet, consectetur adipisicing elit. Blanditiis nemo tenetur ullam.</VerticalTimeline>
              <VerticalTimeline>Lorem <a href="">ipsum</a> dolor.</VerticalTimeline>
              <VerticalTimeline>Lorem ipsum dolor sit amet, <a href="">consectetur adipisicing elit</a>. Commodi dolores dolorum laborum minima tempore?</VerticalTimeline>
              <VerticalTimeline><a href="">Lorem ipsum</a> dolor sit amet, consectetur adipisicing elit. Fugit, reprehenderit.</VerticalTimeline>
              <VerticalTimeline>Lorem <a href="">ipsum</a> dolor sit amet, consectetur adipisicing elit. Blanditiis nemo tenetur ullam.</VerticalTimeline>
              <VerticalTimeline>Lorem <a href="">ipsum</a> dolor.</VerticalTimeline>
              <VerticalTimeline>Lorem ipsum dolor sit amet, <a href="">consectetur adipisicing elit</a>. Commodi dolores dolorum laborum minima tempore?</VerticalTimeline>
            </div>
          </Card>
        </div>
      </ProjectPageWrapper>
    );
  }
}

export default ProjectPage;