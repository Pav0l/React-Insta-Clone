import React, { useState } from 'react';

export default function authCheck(Posts, Login) {
  return function WithAuthCheck(props) {
    const [isAuth, setAuth] = useState(JSON.parse(localStorage.getItem('isAuthed')) || false);
    const [userName, setUserName] = useState(localStorage.getItem('userName') || '');


    const userNameUpdater = (event) => {
      event.preventDefault();
      localStorage.setItem('userName', event.target.value);
      setUserName(event.target.value);
    };

    const buttonHandler = (event) => {
      event.preventDefault();
      setAuth(true);
      localStorage.setItem('isAuthed', true);
    };

    const logOut = () => {
      localStorage.removeItem('isAuthed');
      localStorage.removeItem('userName');
      setAuth(false);
      setUserName('');
      alert(`${userName} was logged out!`);
    };

    if (isAuth) {
      return (
        <Posts
          {...props}
          user={userName}
          logOut={logOut}
        />
      );
    }
    return (
      <Login
        {...props}
        userName={userName}
        userNameUpdater={userNameUpdater}
        buttonHandler={buttonHandler}
      />
    );
  };
}
