import React,{Component} from 'react';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import RoomFilter from '../filters/roomFilter';
import CostFilter from '../filters/costFilter';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class ListingApi extends Component{
    constructor(){
        super()

        this.state={
            hotellist:''
        }
    }

    setDataPerFilter=(sortedData) => {
        this.setState({hotellist:sortedData})
    }

    render(){
        return(
            <div className="row">
                <div className="col-md-2">
                    <RoomFilter roomPerType={(data) => {this.setDataPerFilter(data)}}/>
                    <CostFilter costPerType={(data) => {this.setDataPerFilter(data)}}/>
                </div>
                <div className="col-md-10">
                    <ListingDisplay listdata={this.state.hotellist}/>
                </div>
            </div>
        )
    }

    componentDidMount(){
        let tripid = this.props.match.params.id;
        sessionStorage.setItem('tripId',tripid)
        axios.get(`${url}/${tripid}`)
        .then((res) => {this.setState({hotellist:res.data})})
    }
}

export default ListingApi