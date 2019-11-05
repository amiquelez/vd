import React from 'react';

import BtnPlay from '../../../assets/img/btn_play.png';
import './Video.scss';

const Video = props => {
    return (
        <div className="video" style={{width: `${props.width}px`}}>
            <div className="img_container">
                <img src={props.src} alt={props.title} className="video_img" />
                <img src={BtnPlay} alt="Play" className="btn_play" />
            </div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Video;