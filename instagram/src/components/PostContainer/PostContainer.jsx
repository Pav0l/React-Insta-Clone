import React from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import dummyData from '../../dummy-data';
import Post from './Post';
import SearchBar from '../SearchBar/Search';

export default class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.updateData = dummyData.map(post => {
      return {
        ...post,
        display: true,
        id: uuid(),
      }
    });

    this.state = {
      postsList: JSON.parse(localStorage.getItem('postsList')) || this.updateData,
      searchVal: '',
      commentField: '',
    };
  }

  componentDidUpdate() {
    if (localStorage.getItem('postsList') !== JSON.stringify(this.state.postsList)) {
      console.log('localStorage updated');
      localStorage.removeItem('postsList');
      localStorage.setItem('postsList', JSON.stringify(this.state.postsList));
    }
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

  addLike = postId => {
    this.setState(prevState => {
      const likedPost = prevState.postsList.map(post => {
        if (post.id === postId) {
          const postLikes = post.likes;
          let newLikes = postLikes + 1; 
          return {
            ...post,
            likes: newLikes,
          };
        }
        return {...post};
      });
      return {postsList: likedPost}
    });
  }

  clearInput = () => {
    this.setState({
      commentField: '',
    })
  }
  
  commentChange = (event) => {
    this.setState({
      commentField: event.target.value,
    });
  }

  updateComment = (postId) => {
    this.setState(prevState => {
      const commentedPost = prevState.postsList.map(post => {
        if (post.id === postId) {
          const commentsArr = post.comments.concat({
            username: this.props.user,
            text: this.state.commentField,
          });
          return {
            ...post,
            comments: commentsArr,
          }
        }
        return {...post};
      });
      return {postsList: commentedPost};
    });    
    this.clearInput();
  }

  

  render() {

    const { postsList } = this.state;
    const onSearchFilteredList = postsList.filter(post => post.display === true);

    return (
      <StyledAppWrapp>

        <SearchBar
          searchVal={this.state.searchVal}
          searchHandler={this.searchHandler}
          logOut={this.props.logOut}
        />
        {
          onSearchFilteredList.map(post => (
            <Post
              key={post.id}
              id={post.id}
              user={post.username}
              userLogo={post.thumbnailUrl}
              image={post.imageUrl}
              likes={post.likes}
              time={post.timestamp}
              comments={post.comments}

              addLike={this.addLike}
              updateComment={this.updateComment}
              commentChange={this.commentChange}
              commentField={this.state.commentField}
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
