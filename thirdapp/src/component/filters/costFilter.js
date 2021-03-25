import React,{Component} from 'react';
import axios from 'axios';

const url = "https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component{

    filterRoom = (event) => {
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];
        let tripId = sessionStorage.getItem('tripId');
        let costUrl;
        if(cost==""){
            costUrl = `${url}/${tripId}`
        }else{
            costUrl = `${url}/${tripId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
            .then((response) => {this.props.costPerType(response.data)})
    }
    render(){
        return(
            <React.Fragment>
                <center>Cost Type</center>
                <div onChange={this.filterRoom}>
                    <label className="radio">
                        <input type="radio" value="" name="room"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1000-3000" name="room"/> 1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" value="3001-6000" name="room"/> 3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" value="6001-9000" name="room"/> 6001-9000
                    </label>
                    <label className="radio">
                        <input type="radio" value="9001-12000" name="room"/> 9001-12000
                    </label>
                </div>
            </React.Fragment>
        )
    }

}

export default CostFilter;