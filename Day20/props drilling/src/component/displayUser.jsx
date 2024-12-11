import React from 'react'

const DisplayUser = ({name,age}) => {
  return (
    <div>
        <h3 className="flex justify-center items-center text-green-600 bold">Display User Component:child2</h3>
        <p className="flex justify-center items-center">Hello World! </p>
        <p className="flex justify-center items-center ">Welcome,{name} </p>
    </div>
  )
}

export default DisplayUser