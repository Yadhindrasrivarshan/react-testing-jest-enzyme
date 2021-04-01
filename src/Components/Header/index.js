import React from 'react';
import './styles.scss'
import Logo from './../../assets/graphics/logo.png'
const Header=(props)=>{
    return (

        <header data-test="headerComponent" className="headerComponent">
            <div className="wrap">
                <div className="logo">
                     <img data-test="logoIMG" className="logoIMG" src={Logo} alt="logo name"/>
                </div>
            </div>
        </header>
    )
}

export default Header