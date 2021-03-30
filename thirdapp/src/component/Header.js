import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

class Header extends Component {
    constructor(props){
        super(props)

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
                        <img src={this.state.imageurl} style={{height:50,width:50}}/>
                        Hi {sessionStorage.getItem('username')}
                    </a>
                </li>
            )
        }
    }


    render(){
        console.log(">>>>>",this.props)
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

    componentDidMount(){
        const code = (this.props.location.search).split('=')[1];
        if(code){
            let requestData={
                code:code
            }
            fetch('http://localhost:9900/oauth',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(requestData)
            })
            .then((res) => res.json())
            .then((data) => {
                var user = data.name;
                var img = data.avatar_url;
                sessionStorage.setItem('username',user)
                this.setState({username:user,imageurl:img})
            })
        }
    }
    
    
}

export default withRouter(Header);