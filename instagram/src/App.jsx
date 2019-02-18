import React, { Component } from 'react';
// import './App.css';
import styled from 'styled-components';
import dummyData from '../src/dummy-data';
import SearchBar from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/Post';


class App extends Component {
  render() {
    return (
      <StyledAppWrapp className="App">

        <SearchBar />

        {
          dummyData.map((item, idx) => (
            <PostContainer
              key={idx}
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
}

export default App;

const StyledAppWrapp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;