import React from 'react'

const Inputs = ({name, value, onChange, type}) => {
  return (

    <>  
    
      <div className="flex flex-col gap-1">
        <label className="capitalize"
        htmlFor={name}>{name}</label>
        <input 
        className="border-2 border-blue-400"
        type={type} 
        onChange={onChange}
        value={value}
        name={name}
        id={name}
        />
      </div>
    
    
    </>

  )
}

export default Inputs