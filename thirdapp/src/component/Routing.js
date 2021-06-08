import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Home';
import ListingApi from './listing/listingApi';
import HotelDetails from './details/hotelDetails';
import PlaceBooking from './booking/placeBooking';
import ViewBooking from './booking/bookingApi';
import LoginComponent from './login/Login'
import RegisterComponent from './login/Register'


const Routing = () => {
    return(
        <BrowserRouter forceRefresh={true}>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/list/:id" component={ListingApi}/>
            <Route path="/details/:id" component={HotelDetails}/>
            <Route path="/booking/:hotel_name" component={PlaceBooking}/>
            <Route path="/viewBooking" component={ViewBooking}/>
            <Route exact path="/login" component={LoginComponent}/>
            <Route  path="/signup" component={RegisterComponent}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;