import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'

import Button from '../Button'

import './menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="LiraFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
              Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu