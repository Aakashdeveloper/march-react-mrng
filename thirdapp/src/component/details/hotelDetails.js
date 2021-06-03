import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url = "https://developerfunnel.herokuapp.com/hotelsdetails";

class Details extends Component{
    constructor(){
        super()

        this.state={
            details:'',
            listId: sessionStorage.getItem('tripId'),
            aminities: ['WiFi','Non Smoking','Hot Water','AC'],
            items:[]
        }
    }

    handleChange = (event) => {
        console.log("event>>>", event)
        console.log("event.target.outerText>>",event.target.outerText)
        this.setState({items: [...this.state.items, event.target.outerText]});
    }

    handleRemove = (event) => {
        console.log("remove>>>>>>",event.target.outerText)
        var index = this.state.items.indexOf(event.target.outerText);
        console.log("index>>>>>>",index)
        if (index !== -1) {
            var out = this.state.items.splice(index, 1); 
        }
        this.setState({items: [...this.state.items, out]});
        console.log(">>>>array111", this.state.items)
    }

    renderCart = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <button type="button" class="btn btn-primary" onClick={this.handleRemove}>{item} <span className="glyphicon glyphicon-minus"></span></button>
                )
            })
        }
    }

    renderAminities = (data) => {
        if(data){
            return data.map((item) => {
                return(
                <p onClick={this.handleChange}>{item} <span className="glyphicon glyphicon-plus"></span>
                    </p>
                )
            })
        }
    }

    render(){
        console.log(">>>>array", this.state)
        // let details = this.state.details
        let {details} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{details.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className='row'>
                            <div className="col-md-12">
                                <img className="img-responsive" src={details.thumb} style={{height:400,width:1500}}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{details.name}</h3>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                            </div>
                            <div className="col-md-12">
                                {this.renderCart(this.state.items)}
                            </div>
                        </div>
                        <hr/>
                        <Tabs>
                            <TabList>
                                <Tab>Description</Tab>
                                <Tab>Contact</Tab>
                                <Tab>Aminities</Tab>
                            </TabList>

                            <TabPanel>
                                <h2>{details.name}</h2>
                                <p>{details.name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </TabPanel>
                            <TabPanel>
                                <h3>{details.locality}</h3>
                                <h3>{details.address}</h3>
                                <h3>Phn: 97776642443</h3>
                            </TabPanel>
                            <TabPanel>
                                {this.renderAminities(this.state.aminities)}
                            </TabPanel>

                        </Tabs>
                        <Link to={`/list/${this.props.match.params.id}`} className="btn btn-danger">Back</Link> &nbsp;
                        <Link to={`/booking/${details.name}`} className="btn btn-success">Proceed</Link>
                    </div>
                </div>
            </div>
        )
    }

   async componentDidMount(){
        let hotelid = this.props.match.params.id;
        let response = await axios.get(`${url}/${hotelid}`)
        this.setState({details:response.data[0]});
        sessionStorage.setItem('cost',response.data[0].cost)
    }

}

export default Details;