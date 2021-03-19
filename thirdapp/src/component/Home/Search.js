import React,{Component} from 'react';
import './Search.css';

const url = "https://developerfunnel.herokuapp.com/location";

class Search extends Component{
    constructor(){
        super()
        console.log(">>>>>>inside constructor ")
        this.state={
            location : ''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item._id}>
                        {item.city_name}
                    </option>
                )
            })
        }
    }
    render(){
        console.log(">>>>>>inside render ")
        return(
            <div className="imageContainer">
                <div id="logo">
                    D!
                </div>
                <div className="heading">
                    Plan Trip With ûS
                </div>
                <div className="locationSelector">
                    <select className="locationDropDown">
                        <option>-------SELECT CITY-------</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className="reataurantsinput">
                        <option>-------SELECT HOTEL-------</option>
                    </select>
                </div>
            </div>
        )
    }

    // onload call api 
    componentDidMount(){
        console.log(">>>>>>inside componentDidMount ")
        fetch(url,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({location:data})
        }) 
        .catch((err) => {
            console.log(err.status)
        })
    }
}

export default Search;