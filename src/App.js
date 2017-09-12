// @flow
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import {
    View,
    Text
  } from 'react-native';

export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <View>
                    <Text>Generic React-Native Redux App</Text>
                </View>
            </Provider>
        );
    }

}