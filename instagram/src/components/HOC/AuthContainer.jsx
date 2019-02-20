import React from 'react';

export default function authCheck(Posts, Login) {
  return class WithAuthCheck extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isAuth: false,
        userName: '',
      };
    }

    userNameUpdater = (event) => {
      this.setState(prevState => ({
        userName: prevState.userName.concat(event.target.value)
      }));
    }
    
    buttonHandler = (event) => {
      event.preventDefault();
      this.setState({isAuth: true,})
    }

    render() {
      if (this.state.isAuth) {
        return <Posts {...this.props} />;
      }
      return (
        <Login
          {...this.props}
          userNameUpdater={this.userNameUpdater}
          buttonHandler={this.buttonHandler}
        />
      );
    }
  };
}
