import React from 'react'

function Input({name,lable="defaultLable",placeholder="defalutPlaceholder" ,onChange ,value ,type } ) {
    return (
       <div className='custom_input flex coloum left '>
        <label>
            {lable}
        </label>
        <input name={name} onChange={onChange} placeholder={placeholder} value={value} type={type} >
        </input> 
       </div>
    )
}

export default Input
