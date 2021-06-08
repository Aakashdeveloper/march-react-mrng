import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom'

const url = "http://localhost:5000/api/auth/userinfo";

class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            username:'',
            imageurl:'',
            userdata:'',
            dummy:''
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

    handleLogout = () => {
        this.setState({userdata:''})
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userData')
        this.props.history.push('/');
        
    }


    conditionalLogin = () => {
        console.log("conditionalLogin>>>>>>",this.state.userdata.name)
        if(this.state.userdata.name){
            let data = this.state.userdata
            let outputarray = [data.name,data.email,data.phone,data.role]
            sessionStorage.setItem('userData',outputarray)
            return(
                <>
                    <li><Link>{this.state.userdata.name}</Link></li>
                    <li><button onClick={this.handleLogout}>LogOut</button></li>
                </>
            )
        }else{
            return(
                <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </>
            )
        }
    }

   

    render(){
        //console.log(">>>>>",this.props)
        console.log(">>>>>in render>>>>>>>")
        console.log(">>>>>",this.state)
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
                                <li><Link to="/viewBooking">Bookings</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                              
                                {this.conditionalLogin()}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    componentDidMount(){
        //this.setState({dummy:'test'})
        //console.log(">>>>>",sessionStorage.getItem('ltk'))
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

        fetch(url,{
            method:'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userdata:data
            })
        })
    }
    
    
}

export default withRouter(Header);