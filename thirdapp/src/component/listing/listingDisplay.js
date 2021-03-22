import React from 'react';
import './listing.css';
import {Link} from 'react-router-dom';

const ListingDisplay = (props) => {
    const renderlist =  ({listdata}) => {
        if(listdata){
            if(listdata.length>1){
                return listdata.map((item) => {
                    return(
                        <div className="item">
                            <div className="row">
                                <div className="col-sm-5">
                                    <img className="Image" src={item.thumb}/>
                                </div>
                                <div className="col-sm-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${item._id}`}>{item.name}</Link>
                                        <div className="city_name">{item.city_name}</div>
                                        <div className="city_name">{item.locality}</div>
                                        <div className="city_name">{item.address}</div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="cuisine">Room Type</div>
                                    <div className="cuisine">Cost For Night</div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="cuisine_data">
                                        {item.type[0].name}
                                    </div>
                                    <div className="cuisine_data">Rs. {item.cost}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }else{
                return(
                    <div className="item">
                        <h2>No Data Found</h2>
                    </div>
                )
            }  
        }else{
            return(
                <div className="item">
                    <img src="/images/loader.gif"/>
                </div>
            )
        }
    }

    return(
        <div className="container-fluid">
            <div className="main-heading">
                <div className="col-md-12">
                    {renderlist(props)}
                </div>
            </div>
        </div>
    )
}

export default ListingDisplay