import React, { useRef } from 'react';
import { useState } from 'react';

const UnControlled =()=>{
    const referInput =useRef();
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        const result =referInput.current.value;
        document.getElementById("demo1").innerHTML=result;

        alert(`UnControlled Input Value: ${result}`);
    }


    return(
        <form onSubmit={handleSubmit}>
            <h2>UnControlled Input</h2>
            <label>Enter value:</label>
            <input type='text' ref={referInput} /><br/>
            Result:<span id='demo1'></span><br/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default UnControlled;