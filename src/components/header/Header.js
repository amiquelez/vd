import React from 'react';

import Logo from '../../assets/img/logo.png';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <div className="content">
                <img src={Logo} alt="Videos Divertidos" className="logo" />
            </div>
            <nav>
                <ul className="content">
                    <li>Inicio</li>
                    <li id="btn_ultimos_mb">últimos videos </li>
                    <li id="btn_masvotados_mb">Más votados</li>
                    <li id="btn_masvistos_mb">Más Vistos</li>
                    <li id="btn_categorias_mb">Categorías</li>
                    <li id="btn_secciones_mb">Secciones</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;