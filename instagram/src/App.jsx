import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/Search';
import PostContainer from './components/PostContainer/Post';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postsList: [],
    };
  }

  componentDidMount() {
    this.setState({
      postsList: dummyData,
    });
  }

  componentDidUpdate() {

  }

  render() {
    const { postsList } = this.state;

    return (
      <StyledAppWrapp>

        <SearchBar />
        {
          postsList.map(post => (
            <PostContainer
              key={uuid()}
              user={post.username}
              userLogo={post.thumbnailUrl}
              image={post.imageUrl}
              likes={post.likes}
              time={post.timestamp}
              comments={post.comments}
            />
          ))
        }
      </StyledAppWrapp>
    );
  }
}

const StyledAppWrapp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
