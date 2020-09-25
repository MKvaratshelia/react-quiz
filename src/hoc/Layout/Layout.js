import React, { Component } from 'react';

import './Layout.css';
import MenuToggle from '../../components/navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/navigation/Drawer/Drawer';
import { connect } from 'react-redux';

class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMunuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  menuCloseHandler = () => {
    this.setState({
      menu: false,
    });
  };
  render() {
    return (
      <div className="Layout">
        <MenuToggle
          onToggle={this.toggleMunuHandler}
          isOpen={this.state.menu}
        />
        <Drawer
          isOpen={this.state.menu}
          onClose={this.menuCloseHandler}
          isAuthenticated={this.props.isAuthenticated}
        />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.token,
  };
}

export default connect(mapStateToProps)(Layout);
