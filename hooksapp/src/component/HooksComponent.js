import React,{useState,useEffect} from 'react';
import DisplayComponent from './DisplayComponent'

const url = "https://developerfunnel.herokuapp.com/location";

function HooksComp(){
    const [title] = useState('Hooks App');
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0)
    const [city,setCity] = useState()

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            setCity(data)
        })
    })

    const myCount = () => {
        setCount(count+1)
    }

    return(
        <div>
            <h1>{title}</h1>
            <h2>{count}</h2>
            <button onClick={myCount}>Counter</button>
            <h2>{count1}</h2>
            <button onClick={()=>{setCount1(count1+1)}}>Counter</button>
            <DisplayComponent myCity={city}/>
        </div>
    )
}

export default HooksComp;