import logo from '../assets/react.svg'
import React from 'react'

function Header(){
    return (
        <div className='header'>
            <div className='logo-ct'>
            <img src={logo} />
            <h3 className='facts'>ReactFacts</h3>

            </div>
            <h4>React Course - Project 1</h4>
        </div>
    )
}

export default Header