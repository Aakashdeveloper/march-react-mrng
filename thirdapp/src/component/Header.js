import React from 'react';
import {Link} from 'react-router-dom'

const Header = (props) => {
    return(
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">Developer Hotel</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;


function flattenObj(obj){
    var output = {}
    for(var i in obj){
    if(!obj.hasOwnProperty(i)) continue;
    if(typeof obj[i] == 'object') {
    var fobject = flattenObj(obj[i]);
        for(var out in fobject){
            if(!obj.hasOwnProperty(i)) continue;
            output[i+":"+out]  = fobject[out]
        }
    }else{
        output[i]= obj[i];
    }
   }
    
   return output;
}

{key1:key2: 2, key1:key3:key4: 4, key1:key5:key6:key7: 7}