import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Post from './Post';
import SearchBar from '../SearchBar/Search';

export default function PostContainer({
  onSearchFilteredList,
  searchVal,
  searchHandler,

  addLike,
  updateComment,
  commentChange,
  commentField,
}) {
  return (
    <StyledAppWrapp>

      <SearchBar
        searchVal={searchVal}
        searchHandler={searchHandler}
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

PostContainer.defaultProps = {
  commentField: '',
  searchVal: '',
};

PostContainer.propTypes = {
  searchHandler: PropTypes.func.isRequired,
  searchVal: PropTypes.string,
  commentField: PropTypes.string,
  addLike: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  commentChange: PropTypes.func.isRequired,
  onSearchFilteredList: PropTypes.array.isRequired,
};

const StyledAppWrapp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
