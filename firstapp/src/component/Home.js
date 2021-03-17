import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json';
import NewsDisplay from './NewsDisplay';

class Home extends Component{
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }

    /*
        var a = [5,3,5,6,7,2,5,7,8,4,3,2]
        a.filter((data) => {return data>5})
    */
    filterNews=(userInput) => {
        const output = this.state.news.filter((data) => {
            return data.title.toLowerCase().indexOf(userInput.toLowerCase())>-1
        })

        this.setState({filtered:output})
    }

    render(){
        return(
            <div>
                <Header userText={(data) => {this.filterNews(data)}}/>
                <NewsDisplay newsdata={this.state.filtered}/>
                <Footer year="2022" month="March"/>
            </div>
        )
    }
}

export default Home