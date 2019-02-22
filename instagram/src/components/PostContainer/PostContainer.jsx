import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import dummyData from '../../dummy-data';
import Post from './Post';
import SearchBar from '../SearchBar/Search';

export default function PostContainer({ user, logOut }) {
  const updateData = dummyData.map((post) => {
    return {
      ...post,
      display: true,
      id: uuid(),
    };
  });

  const [postsList, setPostsList] = useState(JSON.parse(localStorage.getItem('postsList')) || updateData);
  const [searchVal, setSearchVal] = useState('');
  const [commentField, setCommentField] = useState('');

  useEffect(() => {
    // this is causing an infinite render-componentUpdate-render loop
    // with this.setState it would be called as a callback after the state is set and updated.
    if (searchVal !== '') {
      searchPostUpdater(searchVal);
    }
  }, [searchVal]);

  const updateStorage = () => {
    if (localStorage.getItem('postsList') !== JSON.stringify(postsList)) {
      localStorage.removeItem('postsList');
      localStorage.setItem('postsList', JSON.stringify(postsList));
    }
  };

  const resetSearch = () => {
    setSearchVal('');
    setPostsList(postsList.map((post) => {
      return {
        ...post,
        display: true,
      };
    }));
  };

  const searchPostUpdater = (searchInput) => {
    setPostsList(
      postsList.map((post) => {
        const postUser = post.username.toLowerCase();
        const showPostStat = postUser.includes(searchInput.toLowerCase());
        if (!showPostStat) {
          return {
            ...post,
            display: false,
          };
        }
        return { ...post };
      }),
    );
  };

  const searchHandler = (event) => {
    event.preventDefault();
    setSearchVal(event.target.value);
  };

  /*
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
  */

  const addLike = (postId) => {
    setPostsList(
      postsList.map((post) => {
        if (post.id === postId) {
          const postLikes = post.likes;
          const newLikes = postLikes + 1;
          return {
            ...post,
            likes: newLikes,
          };
        }
        return { ...post };
      }),
    );
  };

  const clearInput = () => {
    setCommentField('');
  };

  const commentChange = (event) => {
    setCommentField(event.target.value);
  };

  const updateComment = (postId) => {
    setPostsList(
      postsList.map((post) => {
        if (post.id === postId) {
          const commentsArr = post.comments.concat({
            username: user,
            text: commentField,
          });
          return {
            ...post,
            comments: commentsArr,
          };
        }
        return { ...post };
      }),
    );
    clearInput();
  };

  const onSearchFilteredList = postsList.filter(post => post.display === true);

  return (
    <StyledAppWrapp>

      <SearchBar
        searchVal={searchVal}
        searchHandler={searchHandler}
        logOut={logOut}
        resetSearch={resetSearch}
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

            addLike={addLike}
            updateComment={updateComment}
            commentChange={commentChange}
            commentField={commentField}
          />
        ))
      }
    </StyledAppWrapp>
  );
}

PostContainer.propTypes = {
  user: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
};

const StyledAppWrapp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
