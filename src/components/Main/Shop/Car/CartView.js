import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ListView,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';

class CartView extends Component {
  gotoDetail(product) {
    const { navigator } = this.props;
    navigator.push({ name: 'PRODUCT_DETAIL', product });
  }

  render() {
    const {
      main,
      checkoutButton,
      checkoutTitle,
      wrapper,
      productStyle,
      mainRight,
      productController,
      txtName,
      txtPrice,
      productImage,
      numberOfProduct,
      txtShowDetail,
      showDetailContainer
    } = styles;
    const { cartArray } = this.props;
    return (
      <View style={wrapper}>
        <TouchableOpacity
          style={showDetailContainer}
          onPress={this.gotoDetail.bind(this)}
        >
          <Text style={txtShowDetail}>SHOW DETAILS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={checkoutButton}>
          <Text style={checkoutTitle}>TOTAL CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = imageWidth * 452 / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#DFDFDF'
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#2ABB9C',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  main: {
    width,
    backgroundColor: '#DFDFDF'
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir'
  },
  productStyle: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: 'center'
  },
  mainRight: {
    flex: 3,
    justifyContent: 'space-between'
  },
  productController: {
    flexDirection: 'row'
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  txtName: {
    paddingLeft: 20,
    color: '#A7A7A7',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtPrice: {
    paddingLeft: 20,
    color: '#C21C70',
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Avenir'
  },
  txtShowDetail: {
    color: '#C21C70',
    fontSize: 10,
    fontWeight: '400',
    fontFamily: 'Avenir',
    textAlign: 'right'
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
});

export default CartView;
