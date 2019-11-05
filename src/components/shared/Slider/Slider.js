import React, { Component } from 'react';

import Prev from '../../../assets/img/prev.png';
import Next from '../../../assets/img/next.png';
import Video from '../Video/Video';
import './Slider.scss';

class Slider extends Component{

    state = {
        index: 0
    }

    nextProperty = () => {
        const newIndex = this.state.index + 1;
        this.setState({ index: newIndex });
    }

    prevProperty = () => {
        const newIndex = this.state.index - 1;
        this.setState({ index: newIndex });
    }

    render() {
        const {data} = this.props;
        const {index} = this.state;
        return (
            <div className="slider">
                <button className="btn" onClick={() => this.prevProperty()} disabled={index === 0}>
                    <img src={Prev} alt="Previous" />
                </button>
                <div className="slider_content">
                    <div className="slider_wrapper" style={{'transform': `translateX(-${index*25}%)`}}>
                    {data.map(video =>
                        <Video key={video.id} src={video.src} title={video.title} description={video.description} />
                    )}
                    </div>
                </div>
                <button className="btn" onClick={() => this.nextProperty()} disabled={index > data.length - 5}>
                    <img src={Next} alt="Next" />
                </button>
            </div>
        );
    }
}

export default Slider;