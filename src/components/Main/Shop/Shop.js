import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import Home from './Home/home';
import Contact from './Contact/Contact';
import Cart from './Car/Cart';
import Search from './Search/Search';
import Header from './Header';

import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIcons from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIcons from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';

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
    const { iconStyle } = styles;
    return (
      <View style={{ flex: 1 }}>
          <Header onOpen={this.openMenu.bind(this)} />
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            renderIcon={() => <Image source={homeIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            onPress={() => this.setState({ selectedTab: 'home' })}
          >
            <Home />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Cart'}
            title="Cart"
            renderIcon={() => <Image source={cartIcon} style={iconStyle} />}
            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'Cart' })}
          >
            <Cart />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Search'}
            title="Search"
            renderIcon={() => <Image source={searchIcon} style={iconStyle} />}
            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            renderSelectedIcon={() => <Image source={searchIcons} style={iconStyle} />}
            onPress={() => this.setState({ selectedTab: 'Search' })}
          >
            <Search />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Contact'}
            title="Contact"
            renderIcon={() => <Image source={contactIcon} style={iconStyle} />}
            renderSelectedIcon={() => <Image source={contactIcons} style={iconStyle} />}
            selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
            onPress={() => this.setState({ selectedTab: 'Contact' })}
          >
            <Contact />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconStyle: {
    width: 20,
    height: 20
  }
});

export default Shop;
