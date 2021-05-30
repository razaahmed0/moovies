import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Trending from './components/Trending';
import Search from './components/Search';

export default function App() {
  return (
    <>
      <Nav></Nav>
      <Switch>
        <Route exact path='/' component={Trending}></Route>
        <Route exact path='/search' component={Search}></Route>
      </Switch>
    </>
  );
}