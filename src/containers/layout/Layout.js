import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavMb from '../../components/NavMb/NavMb';
import Slider from '../../components/shared/Slider/Slider';
import './Layout.scss';
import videos from '../../assets/data';

class Layout extends Component {

  state = {
    navMobileOpen: false,
    videos: videos
  }

  openNav = () => {
    this.setState({ navMobileOpen: true })
  }

  closeNav = () => {
    this.setState({ navMobileOpen: false });
  }

  render(){
    return (
      <React.Fragment>
        <NavMb open={this.state.navMobileOpen} close={this.closeNav} />
        <Header click={this.openNav} />
        <div className="content" style={{width: '1275px'}}>
          <Slider data={this.state.videos} />
        </div>
      </React.Fragment>
    );
  }
}

export default Layout;
