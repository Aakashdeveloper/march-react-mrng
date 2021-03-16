import React,{Component} from 'react';
import './Header.css';

class Header extends Component{
    constructor(){
        super()

        this.state={
            title:'React App',
            keyword:'User Text Here'
        }
    }
    render(){
        return(
            <div>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <center>
                        <input/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
                <hr/>
            </div>
        )
    }
}
export default Header;