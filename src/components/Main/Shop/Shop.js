import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/home';
import Contact from './Contact/Contact';
import Cart from './Car/Cart';
import Search from './Search/Search';

const { height } = Dimensions.get('window');

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }
  openMenu() {
    const { open } = this.props; // lay phuong thuc open ben Main truyen qua
    open();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
          <View style={{ height: height / 8 }}>
              <TouchableOpacity onPress={this.openMenu.bind(this)}>
                  <Text>Open Menu</Text>
              </TouchableOpacity>
          </View>
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}
          >
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Cart'}
            title="Cart"
            onPress={() => this.setState({ selectedTab: 'Cart' })}
          >
            <Cart />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Search'}
            title="Search"
            onPress={() => this.setState({ selectedTab: 'Search' })}
          >
            <Search />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Contact'}
            title="Contact"
            onPress={() => this.setState({ selectedTab: 'Contact' })}
          >
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

export default Shop;
