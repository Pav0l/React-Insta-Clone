import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CommentSection from '../CommentsSection/Comments';
import AddComment from '../CommentsSection/AddComment';

export default function PostContainer({
  userLogo,
  user,
  image,
  likes,
  comments,
  time,
  id,
  commentField,
  addLike,
  updateComment,
  commentChange,
}) {
  const likeHandler = (event) => {
    event.preventDefault();
    addLike(id);
  };

  const onChangeHandler = (event) => {
    event.preventDefault();
    commentChange(event);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    updateComment(id);
  };

  return (
    <WrapperDiv>
      <UserNameDiv>
        <ThumbUser src={userLogo} alt="user-thumbnail" />
        <UserName>{user}</UserName>
      </UserNameDiv>

      <MainImg src={image} alt="main-img" />

      <CommentSectionWrapper>
        <IconsDiv>
          <StyledIcon onClick={likeHandler} className="far fa-heart" />
          <StyledIcon className="far fa-comment" />
        </IconsDiv>
        <LikesDiv>{likes} likes</LikesDiv>

        <CommentsDiv>
          {
            comments.map(comment => (
              <CommentSection
                key={uuid()}
                user={comment.username}
                commentText={comment.text}
                time={time}
              />
            ))
          }
        </CommentsDiv>

        <TimeDiv>{time}</TimeDiv>
      </CommentSectionWrapper>

      <StyledAddComment type="submit" onSubmit={onSubmitHandler}>
        <AddComment
          commentField={commentField}
          onChangeHandler={onChangeHandler}
        />
      </StyledAddComment>
    </WrapperDiv>
  );
}

PostContainer.defaultProps = {
  comments: [],
  commentField: '',
};

PostContainer.propTypes = {
  user: PropTypes.string.isRequired,
  userLogo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  comments: PropTypes.array,
  commentField: PropTypes.string,
  addLike: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  commentChange: PropTypes.func.isRequired,
};

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem auto;
  border: 1px solid rgba(0, 0, 0, 0.0975);
  // max-width: 80%;
`;

const UserNameDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1rem 0;
`;

const ThumbUser = styled.img`
  border-radius: 50%;
  width: 25px;
  margin: 0 1rem;
`;

const UserName = styled.span`
  font-weight: 600;
`;

const MainImg = styled.img`
  max-width: 100%;
`;

const CommentSectionWrapper = styled.div`
  padding: 1rem;
  max-width: 100%;
  padding-bottom: 0;
`;

const IconsDiv = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: row;
`;

const StyledIcon = styled.i`
  font-size: 20px;
  padding-right: 20px;
  font-weight: 300;
  cursor: pointer;
`;

const LikesDiv = styled.div`
  margin: 0.5rem 0;
`;

const CommentsDiv = styled.div` 
`;

const TimeDiv = styled.div`
  margin: 0.5rem 0;
  font-size: 10px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: .2px;
  line-height: 17px;
`;

const StyledAddComment = styled.form`
  border-top: 1px solid rgba(0, 0, 0, 0.0975);
  width: 95%;
  margin: 0 auto;
`;
