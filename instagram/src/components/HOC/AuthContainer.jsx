import React from 'react';

export default function authCheck(Posts, Login) {
  return class WithAuthCheck extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        isAuth: JSON.parse(localStorage.getItem('isAuthed')) || false,
        userName: localStorage.getItem('userName') || '',
      };
    }

    userNameUpdater = (event) => {
      localStorage.setItem('userName', event.target.value);
      this.setState(({
        userName: event.target.value
      }));
    }
    
    buttonHandler = (event) => {
      event.preventDefault();
      this.setState({isAuth: true,})      
      localStorage.setItem('isAuthed', true);
    }

    logOut = () => {
      localStorage.removeItem('isAuthed');
      localStorage.removeItem('userName');
      this.setState({ isAuth: false, userName: '' });
      alert(`${this.state.userName} was logged out!`);
    }

    render() {
      if (this.state.isAuth) {
        return (
          <Posts
            {...this.props}
            user={this.state.userName}
            logOut={this.logOut}
          />
        );
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
