import React from 'react';
import styled from 'styled-components';
import PostContainer from './components/PostContainer/PostContainer';
import Login from './components/LoginSection/Login';
import authCheck from './components/HOC/AuthContainer';


export default function App() {
  const AuthorizationComponent = authCheck(PostContainer, Login);

  return (
    <StyledAppWrapp>

      <AuthorizationComponent />

    </StyledAppWrapp>
  );
}

const StyledAppWrapp = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
