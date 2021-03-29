import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
    constructor(){
        super()

        this.state={
            username:'',
            imageurl:''
        }
    }
    
    conditionalHeader = () => {
        if(sessionStorage.getItem('username')==null){
            return(
                <li>
                    <a href="https://github.com/login/oauth/authorize?client_id=930f92e500db2f4d357c">
                        Login With Github
                    </a>
                </li>
            )
        }else{
            return(
                <li>
                    <a href="">
                        <img src='' style={{height:50,width:50}}/>
                        Hi {sessionStorage.getItem('username')}
                    </a>
                </li>
            )
        }
    }


    render(){
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
                            <ul className="nav navbar-nav navbar-right">
                                {this.conditionalHeader()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
    
}

export default Header;