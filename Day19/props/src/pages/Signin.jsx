import React from 'react'

const Signin = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">SIGIN PAGE</h1>
      UserName:<input type='text' placeholder='Enter name' className='border-black mx-2'></input><br/>
      Email:<input type='text' placeholder='Enter Email' className='border mx-4'></input><br/>
      Password:<input type='password' placeholder='Enter password' className='border mx-2'></input><br/>
      <button className='text-white bg-blue-600 p-2'>SIGIN</button>
    </div>
  )
}

export default Signin;