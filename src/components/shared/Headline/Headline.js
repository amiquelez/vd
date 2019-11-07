import React from 'react';

import './Headline.scss';

const Headline = (props) => {
    return (
        <div className="headline">
            <h2>{props.children}</h2>
            {props.showLine ? <hr /> : null}
        </div>
    )
}

export default Headline;