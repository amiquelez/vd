import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import NavMb from '../../components/NavMb/NavMb';
import './Layout.scss';

class Layout extends Component {

  state = {
    navMobileOpen: false
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
      </React.Fragment>
    );
  }
}

export default Layout;
