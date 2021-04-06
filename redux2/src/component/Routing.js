import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from '../container/Home';
import Header from './Header';
import Footer from './Footer';
import NewsDetails from '../container/newsDetails'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/details/:id" component={NewsDetails}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing