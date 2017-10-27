import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class OrderHistory extends Component {
  gobackMain() {
      const { navigator } = this.props;
      navigator.pop();
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <Text>OrderHistory Component</Text>
        <TouchableOpacity onPress={this.gobackMain.bind(this)}>
            <Text>go back Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
