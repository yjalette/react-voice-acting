import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Navigation from './components/Navigation';
import HeroImage from './components/HeroImage';
import EmbedVideo from './components/EmbedVideo';

const userObj = JSON.parse(localStorage.getItem('user'));

class App extends Component {
  // state = { user: userObj || null };

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.user !== this.state.user) localStorage.setItem('user', JSON.stringify(this.state.user))
  // }



  render() {

    return (
      <div className="App">
        <Router>
          <Navigation/>
          <HeroImage />
          <EmbedVideo />
          {/* <AuthContext.Provider value={{ user: this.state.user, setUser: data => this.setState({ user: data }), logout: () => this.setState({ user: null }) }}>
          </AuthContext.Provider> */}
        </Router>
      </div>
    );
  }
}

export default App;