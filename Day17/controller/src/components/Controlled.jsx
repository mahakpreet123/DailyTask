import React from 'react';
import { useState } from 'react';

const Controlled =()=>{
    const [value,setValue] =useState("");

    const handleChange = (e) =>{
        setValue(e.target.value);
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        alert(`Controlled Input Value: ${value}`);
        document.getElementById("demo").innerHTML=value;
    }


    return(
        <form onSubmit={handleSubmit}>
            <h2 >Controlled Input:</h2>
            <label>Enter value:</label>
            <input type='text' value={value} onChange={handleChange}/><br/>
            Result:<span id='demo'></span><br/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default Controlled;