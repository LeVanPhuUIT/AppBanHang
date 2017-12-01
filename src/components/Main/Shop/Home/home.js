import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}> 
                
                <TopProduct />
            </View>
        );
    }
}

export default Home;
