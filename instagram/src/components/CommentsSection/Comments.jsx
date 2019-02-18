import React from 'react';
import styled from 'styled-components';

export default function CommentSection({ user, commentText }) {
  return (

    <CommentWrapper>
      <UserName>{user}</UserName>
      <span>{commentText}</span>
    </CommentWrapper>
  )
}

const CommentWrapper = styled.div`
  margin: 0.2rem;
`;

const UserName = styled.span`
  font-weight: 600;
  margin-right: 0.2rem;
`;
