import React from 'react';
import styled from 'styled-components';

export default class Login extends React.Component {
  state = {
    password: '',
  }

  passwordHandler = (event) => {
    event.preventDefault();
    this.setState(({
      password: event.target.value
    }));
  }

  onChangeHandler = (event) => {
    event.preventDefault();
    this.props.userNameUpdater(event);
  }

  render() {
    return (
      <DivWrapper>
        <StyleInsta>Instagram</StyleInsta>
        <StyledText>Sign up to see photos and videos from your friends.</StyledText>

        <LoginForm>
          <InputField
            type="text"
            name="userName"
            placeholder="Name"
            value={this.props.userName}
            onChange={this.onChangeHandler}
          />

          <InputField
            type="password"
            name="userPw"
            placeholder="Password"
            value={this.state.password}
            onChange={this.passwordHandler}
          />

          <StyledButton onClick={this.props.buttonHandler}>Log In</StyledButton>
        </LoginForm>
      </DivWrapper>
    );
  }
}

const DivWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 35%;
  margin: 3rem auto;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
`;

const StyleInsta = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 1rem;
`;

const StyledText = styled.p`
  font-weight: 600;
  color: #999;
  text-align: center;  
`;

const LoginForm = styled.form`
  border-top: 1px solid rgba(0, 0, 0, 0.0975);
  width: 95%;
  margin: 0 auto;
  padding: 1rem 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputField = styled.input`
  padding: 1rem;
  width: 95%;
  color: #999;
  font-size: 14px;
  font-weight: 300;
  opacity: 1;
  margin: 0 auto;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  width: 95%;
  cursor: pointer;
`;
