import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer'

const App = () => {
    return(
        <div>
            <Header/>
            <h1>Hii From React</h1>
            <h2>NareshIT</h2>
            <a href=""></a>
            <img src=""/>
            <Footer year="2022" month="March"/>
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))