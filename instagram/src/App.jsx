import React, { Component } from 'react';
import './App.css';
// import dummyData from '../src/dummy-data';
import SearchBar from './components/SearchBar/Search';
// import PostContainer from './components/PostContainer/Post';


class App extends Component {
  render() {
    return (
      <div className="App">

        <SearchBar />

        {/* <PostContainer /> */}
        
      </div>
    );
  }
}

export default App;
