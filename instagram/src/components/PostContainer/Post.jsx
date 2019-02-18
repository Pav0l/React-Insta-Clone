import React from 'react';
import styled from 'styled-components';
import CommentSection from '../CommentsSection/Comments';

export default function PostContainer({
  key,
  user,
  userLogo,
  image,
  likes,
  time,
  comments,
}) {
  return (
    <WrapperDiv key={key}>
      <UserNameDiv>
        <ThumbUser src={userLogo} alt="user-thumbnail"></ThumbUser>
        <UserName>{user}</UserName>          
      </UserNameDiv>

      <MainImg src={image} alt="main-img"></MainImg>

      
      <IconsDiv>
        <StyledIcon className="far fa-heart"></StyledIcon>
        <StyledIcon className="far fa-comment"></StyledIcon>
      </IconsDiv>

      <LikesDiv>{likes} likes</LikesDiv>


      <CommentSection comments={comments} />


    </WrapperDiv>
    


  )

}

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

const IconsDiv = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: row;
`;

const StyledIcon = styled.i`
  font-size: 20px;
  padding-left: 20px;
  font-weight: 300;
  margin: 1rem 0 0.5rem;
`;

const LikesDiv = styled.div`
  margin-left: 1rem;
`;