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
      searchVal: '',
    };

    this.updateData = dummyData.map(post => {
      return {
        ...post,
        display: true}
    });
  }

  componentDidMount() {
    this.setState({
      postsList: this.updateData,
    });
  }

  searchHandler = (event) => {
    event.preventDefault();

    this.setState({
      searchVal: event.target.value,
    }, () => {
      if (this.searchVal !== '') {
        this.searchPostUpdater(this.state.searchVal);
      }
    });
  }

  searchPostUpdater = searchInput => {
    // add reset search here
    this.resetSearch();

    this.setState(prevState => {
      const searchList = prevState.postsList.map(post => {
        const postUser = post.username.toLowerCase();
        const showPostStat = postUser.includes(searchInput.toLowerCase());
        if (!showPostStat) {
          return {
            ...post,
            display: false,
          };
        }
        return {...post,};
      });

      return {
        postsList: searchList,
      };
    });
  }

  resetSearch = () => {
    this.setState(prevState => {
      const resetList = prevState.postsList.map(post => {
        return {
          ...post,
          display: true,
        };
      });
      return { postsList: resetList };
    });
  }

  render() {
    const { postsList } = this.state;
    const onSearchFilteredList = postsList.filter(post => post.display === true);

    return (
      <StyledAppWrapp>

        <SearchBar
          searchVal={this.state.searchVal}
          searchHandler={this.searchHandler}
        />
        {
          onSearchFilteredList.map(post => (
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
