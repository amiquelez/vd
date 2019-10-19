import React from 'react';

import './NavigationItems.scss';

const NavigationItems = () => (
    <ul className="content">
        <li>Inicio</li>
        <li id="btn_ultimos_mb">últimos videos </li>
        <li id="btn_masvotados_mb">Más votados</li>
        <li id="btn_masvistos_mb">Más Vistos</li>
        <li id="btn_categorias_mb">Categorías</li>
        <li id="btn_secciones_mb">Secciones</li>
    </ul>
);

export default NavigationItems;