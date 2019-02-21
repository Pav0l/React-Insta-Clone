import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export default function AddComment({ commentField, onChangeHandler }) {
  return (

    <AddCommentInput
      type="text"
      placeholder="Add a comment..."
      value={commentField}
      onChange={onChangeHandler}
      key="input-key"
    />
  );
}

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

AddComment.defaultProps = {
  commentField: '',
};

AddComment.propTypes = {
  commentField: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired,
};
