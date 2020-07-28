import React from 'react'

import Logo from '../../assets/images/logo.png'

import Button from '../Button'

import './menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="LiraFlix Logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
              Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu