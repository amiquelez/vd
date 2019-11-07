import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavMb from '../../components/NavMb/NavMb';
import './Layout.scss';
import videos from '../../assets/data';
import LastVideos from '../../components/LastVideos/LastVideos';

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
        <LastVideos videos={this.state.videos} />
      </React.Fragment>
    );
  }
}

export default Layout;
