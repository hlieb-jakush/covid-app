import React from 'react'
import './Button.scss'


const Button = ({ icon, country }) => {
    return (
        <div className='button'>
            <span><img src={icon} alt='flag' /></span>
            <span>{country}</span>
        </div>
    )
}

export default Button