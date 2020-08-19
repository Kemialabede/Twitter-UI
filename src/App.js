import React from 'react';
import LeftSidebar from './Components/LeftSidebar'
import Trends from './Components/Trends/Trends'
import FollowContent from './Components/FollowContent/FollowContent'
import Explore from './Pages/Explore/Explore';
import Profile from './Pages/Profile/Profile';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div>
     <BrowserRouter>
        <Switch>
          <Route exact path = '/' component={Home} />
          <Route exact path = '/profile' component={Profile} />
          <Route exact path = '/explore' component={Explore} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


