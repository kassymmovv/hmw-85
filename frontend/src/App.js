import React from 'react';
import MainPage from "./container/main-page";
import {Navbar,NavbarBrand,Container} from 'reactstrap'
import {NavLink as RouterNavLink,Route,Switch} from 'react-router-dom'
import albums from "./component/albums";
import Tracks from "./component/tracks";

function App() {
  return (
    <div className="App">
        <Navbar color="light" light>
            <NavbarBrand tag={RouterNavLink} to="/">LAST FM</NavbarBrand>

        </Navbar>
        <Container>
            <Switch>
                <Route path="/" exact component={MainPage}/>
                <Route path="/albums/:id" component={albums}/>
                <Route path="/tracks/:id" component={Tracks}/>
            </Switch>
        </Container>
    </div>
  );
}

export default App;
