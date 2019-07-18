import React from 'react';
import {Route, Link} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import LoginFrom from './components/LoginFrom';
import './App.css';

class App extends React.Component{
  render(){
    return (
      <div className = "App">
        <header>
          FriendsList
          <button>
            <Link to ='/login'>Login</Link>
          </button>
        </header>
       <Route path ='/login' component = {LoginFrom}/>     
       <PrivateRoute path = '/friendsList' component = {FriendList} />     
      </div>
    )
  }
}

export default App;
