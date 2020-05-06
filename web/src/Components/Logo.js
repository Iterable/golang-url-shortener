import React from 'react'
import './style.css'

function Logo() {
    return (
        <div class="headerLogo">
            <img src={require('./img/iterable-logo.png')} alt='Logo' />
        </div>
    )
}

export default Logo