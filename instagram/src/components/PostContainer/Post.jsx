import React from 'react';
import uuid from 'uuid';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CommentSection from '../CommentsSection/Comments';

export default class PostContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      commentsList: props.comments,
      commentField: '',
      likesCounter: props.likes,
    };
  }

  componentDidUpdate() {

  }

  clearInput = () => {
    this.setState({
      commentField: '',
    })
  }

  commentChange = event => {
    event.preventDefault();
    this.setState({
      commentField: event.target.value,
    });
  }

  updateComment = event => {
    event.preventDefault();
    this.setState(prevState => ({
      commentsList: prevState.commentsList.concat({
        username: 'hackerUser',
        text: this.state.commentField,
      })
    }));
    this.clearInput();
  }

  addLike = event => {
    event.preventDefault();
    this.setState(prevState => {
      let likeCount = prevState.likesCounter;
      let newCount = likeCount + 1;
      return {
        likesCounter: newCount,
      }
    });
  }

  render() {
    return (
      <WrapperDiv>
        <UserNameDiv>
          <ThumbUser src={this.props.userLogo} alt="user-thumbnail" />
          <UserName>{this.props.user}</UserName>
        </UserNameDiv>

        <MainImg src={this.props.image} alt="main-img" />

        <BottomSectionWrapper>
          <IconsDiv>
            <StyledIcon onClick={this.addLike} className="far fa-heart" />
            <StyledIcon className="far fa-comment" />
          </IconsDiv>
          <LikesDiv>{this.state.likesCounter} likes</LikesDiv>

          <CommentsDiv>
            {
              this.state.commentsList.map(comment => (
                <CommentSection
                  key={uuid()}
                  user={comment.username}
                  commentText={comment.text}
                  time={this.props.time}
                />
              ))
            }
          </CommentsDiv>

          <TimeDiv>{this.props.time}</TimeDiv>
        </BottomSectionWrapper>

        <StyledAddComment type="submit" onSubmit={this.updateComment}>
          <AddCommentInput
            type="text"
            placeholder="Add a comment..."
            value={this.state.commentField}
            onChange={this.commentChange}

          />
        </StyledAddComment>
      </WrapperDiv>
    );
  }
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
  comments: PropTypes.array,
  commentField: PropTypes.string,
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

const BottomSectionWrapper = styled.div`
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

const AddCommentInput = styled.input`
  padding: 1rem;
  width: 95%;
  color: #999;
  font-size: 14px;
  font-weight: 300;
  opacity: 1;
  margin: 0 auto;
  border: none;
`;
