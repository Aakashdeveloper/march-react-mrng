import React,{Component} from 'react';
import axios from 'axios';
import BookingDisplay from './bookingDisplay';

const bookingUrl = "http://localhost:8900/booking";

class Booking extends Component{
    constructor(props){
        super(props)

        this.state={
            booking:''
        }
    }
    render(){
        if(this.state.booking){
            return(
                <BookingDisplay bookdata={this.state.booking}/>
            )
        }else{
            return(
                <h2>Login First To see Your Bookings</h2>
            )
        }
        
    }

    componentDidMount(){
        if(this.props.location){
            var qparams = this.props.location.search
            var data = {
                        "status":qparams.split('&')[0].split('=')[1],
                        "date":qparams.split('&')[2].split('=')[1],
                        "bank":qparams.split('&')[3].split('=')[1]
                    }
            fetch(`${bookingUrl}/${qparams.split('&')[1].split('=')[1].split('_')[1]}`,
                {
                    method:'PATCH',
                    headers:{
                      'Accept':'application/json',
                      'Content-Type':'application/json'  
                    },
                    body:JSON.stringify(data)
                })
                
    
            if(sessionStorage.getItem('userData')){
                axios.get(`${bookingUrl}/?email=${sessionStorage.getItem('userData').split(',')[1]}`).then((res) =>  {this.setState({booking:res.data})})
            }
        }
    }
}

export default Booking