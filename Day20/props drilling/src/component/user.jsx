import React from 'react'
import DisplayUser from"./displayUser";

const user = ({name,age}) => {
  return (
    <div>
        <h2 className="flex justify-center items-center text-blue-600">User component:child1</h2>
        <DisplayUser name={name} age={age}/>
    </div>
  )
}

export default user