import  React, { useState , useEffect } from 'react'
import './styles/DateTime.css'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <h1>{date.toLocaleTimeString([], {timeStyle: 'short', hour12: false })}</h1>
            <h2>What is your main focus for today?</h2>
            {/* <p>{date.toLocaleDateString()}</p> */}

        </div>
    )
}

export default DateTime