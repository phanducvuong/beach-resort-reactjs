import React from 'react';
import './App.css';

import Home                 from './pages/Home';
import Rooms                from './pages/Rooms';
import SingleRoom           from './pages/SingleRoom';
import Error                from './pages/Error';

import {Route, Switch}      from 'react-router-dom';

function App() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/single-room" component={SingleRoom} />
      <Route exact path="/error" component={Error} />

      {/* 32:12 link video: https://www.youtube.com/watch?v=ScDWrogElmo&t=2326s */}
    </>
  );
}

export default App;