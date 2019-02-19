import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/Post';


function App() {
  return (
    <StyledAppWrapp>

      <SearchBar />
      {
        dummyData.map(item => (
          <PostContainer
            key={uuid()}
            user={item.username}
            userLogo={item.thumbnailUrl}
            image={item.imageUrl}
            likes={item.likes}
            time={item.timestamp}
            comments={item.comments}
          />
        ))
      }
    </StyledAppWrapp>
  );
}

export default App;

const StyledAppWrapp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
