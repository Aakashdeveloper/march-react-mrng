import React,{Component} from 'react';

const bookingUrl = "http://localhost:8900/booking";

class PlaceOrder extends Component{
    constructor(props){
        super(props)

        this.state={
            id:Math.floor(Math.random()*100000),
            hotel_name:this.props.match.params.hotel_name,
            name:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[0]:'',
            phone:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[2]:'',
            email:sessionStorage.getItem('userData')?sessionStorage.getItem('userData').split(',')[1]:'',
            cost:sessionStorage.getItem('cost')
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        console.log(this.state);
        fetch(bookingUrl,
            {
                method:'POST',
                headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'  
                },
                body:JSON.stringify(this.state)
            })
            .then(this.props.history.push('/viewBooking'))
    }

    render(){
        if(sessionStorage.getItem('userData')){
            return(
                <div className="container">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            Place Booking
                        </div>
                    <form method="POST" action="http://localhost:4100/paynow">
                        <div className="panel-body">
                            <div className="form-group">
                                <label>Order Id</label>
                                <input readOnly name="id" value={this.state.id}
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Hotel Name</label>
                                <input readOnly name="hotel_name" value={this.state.hotel_name}
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Cost</label>
                                <input readOnly name="cost" value={this.state.cost}
                                className="form-control"/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input name="email" value={this.state.email}
                                className="form-control" readOnly/>
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input name="name" value={this.state.name}
                                className="form-control" onChange={this.handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Phone</label>
                                <input name="phone" value={this.state.phone}
                                className="form-control" onChange={this.handleChange}/>
                            </div>
                            <button className="btn btn-success" 
                            onClick={this.handleSubmit}>
                                Pay Now
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            )
        }else{
            return(
                <h1>Login First To place booking</h1>
            )
        }
    }
}


export default PlaceOrder