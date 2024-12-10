import React from 'react'

const Login = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4 ">LOGIN PAGE</h1>
      Email:<input type='text' placeholder='Enter Email' className='border-black'></input><br/>
      Password:<input type='password' placeholder='Enter password' className='border-black'></input><br/>
      <button className='text-white bg-red-600 p-2'>LOGIN</button>
    </div>
  )
}

export default Login;