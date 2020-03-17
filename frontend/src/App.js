import React from 'react';
import Toolbar from "./component/Toolbar/Toolbar";

import MainPage from "./container/main-page";
import {Container} from 'reactstrap'
import {Route,Switch} from 'react-router-dom'
import Register from "./container/Register/Register";
import Login from "./container/Login/Login";
import TrackHistory from "./container/TrackHistory/TrackHistory";


function App() {
  return (
    <div className="App">
        <header>
            <Toolbar/>
        </header>
        <Container>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/track_history" exact component={TrackHistory}/>
                <Route path="/register" exact component={Register}/>
                <Route path="/login" exact component={Login}/>
            </Switch>
        </Container>
    </div>
  );
}

export default App;
