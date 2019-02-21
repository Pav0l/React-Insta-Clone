import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function CommentSection({ user, commentText }) {
  return (

    <CommentWrapper>
      <UserName>{user}</UserName>
      <span>{commentText}</span>
    </CommentWrapper>
  );
}

const CommentWrapper = styled.div`
  margin: 0.2rem;
`;

const UserName = styled.span`
  font-weight: 600;
  margin-right: 0.2rem;
`;

CommentSection.propTypes = {
  user: PropTypes.string.isRequired,
  commentText: PropTypes.string.isRequired,
};
