import React from 'react';

import Logo from '../../assets/img/logo_mb.png';
import Close from '../../assets/img/close.png';
import './NavMb.scss';
import NavigationItems from '../NavigationItems/NavigationItems';

const NavMb = ( props ) => {
	
	let classes = props.open ? 'mobile nav_bar_mobile is-nav-open' : 'nav_bar_mobile mobile';

    return (
        <div className={classes}>
			<div className="content">
				<div id="btn_close">
					<img src={Close} alt="close" onClick={props.close} />
				</div>
				<div className="nav_bar_img_vd">
					<img src={Logo} alt="Videos Divertidos" />
				</div>
				<NavigationItems />
			</div>
		</div>
    );
}

export default NavMb;