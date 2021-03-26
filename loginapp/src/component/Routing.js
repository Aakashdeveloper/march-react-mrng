import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import UserList from './UserApi';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Register}/>
            <Route  path="/login" component={Login}/>
            <Route  path="/profile" component={Profile}/>
            <Route  path="/list" component={UserList}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;