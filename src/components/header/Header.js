import React from 'react';

import Logo from '../../assets/img/logo.png';
import BtnMb from '../../assets/img/btn_mobile.png';
import './Header.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

const Header = ( props ) => {
    return (
        <header>
            <div className="content top">
                <img src={Logo} alt="Videos Divertidos" className="logo" />
                <div className="mobile" id="btn_mobile" onClick={props.click}>
                    <img src={BtnMb} alt="Btn Mobile" />
                </div>
            </div>
            <nav className="desktop">
                <NavigationItems />
            </nav>
        </header>
    );
}

export default Header;