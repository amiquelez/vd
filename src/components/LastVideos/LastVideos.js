import React from 'react';

import Slider from '../shared/Slider/Slider';
import Headline from '../shared/Headline/Headline';

const LastVideos = (props) => {
    return(
        <React.Fragment>
            <div className="content">
                <Headline showLine={true}>Ultimos videos</Headline>
            </div>
            <div className="content" style={{width: '1275px'}}>
                <Slider data={props.videos} />
            </div>
        </React.Fragment>
    );
};

export default LastVideos;