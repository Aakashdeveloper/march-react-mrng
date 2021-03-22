import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay'

const url = "https://developerfunnel.herokuapp.com/booking"

class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            tripType:''
        }
    }
    render(){
        return(
            <React.Fragment>
                <QuickDisplay tripdata={this.state.tripType}/>
            </React.Fragment>
        )
    }

    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({tripType:data})
        })
    }
}

export default QuickSearch;