import React, { Component } from 'react';
//import { View, Text} from 'react-native';
import Drawer from 'react-native-drawer';

import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {
  gotoAuthentication() {
    const { navigator } = this.props;
    navigator.push({ name: 'AUTHENTICATION' });
  }
  gotoChangeInfo() {
    const { navigator } = this.props;
    navigator.push({ name: 'CHANGE_INFO' });
  }
  gotoOrderHistory() {
    const { navigator } = this.props;
    navigator.push({ name: 'ORDER_HISTORY' });
  }
  closeControlPanel = () => {
    this.drawer.close();
  };
  openControlPanel = () => {
    this.drawer.open();
  };
  componentDidMount() {
    this.drawer.open();
  }
  render() {
    const { navigator } = this.props;
    return (
        ///kéo qua kéo lại
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        content={<Menu navigator={navigator} />}
        tapToClose
        openDrawerOffset={0.4}
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
