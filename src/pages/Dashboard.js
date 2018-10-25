/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, ActivityIndicator} from 'react-native';
import styles from './Dashboard.styles';

import TheButton from '../shared/Button';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tombolDipijit: false,
      muterin: false,
    };
  }

  tombolDipijit = () => {
    this.setState({
      tombolDipijit: true,
      muterin: true
    });
  }

  tampilinTampilan = () => {
    if (this.state.muterin) {
      return this.tampilinProses();
    } else if (this.state.muterin === true) {
      let that = this;
      setTimeout(() => {
        that.setState({
          muterin: false,
          tombolDipijit: false
        });

        return that.tampilinData();
      }, 3000);
      // return this.tampilinData();
    }
  }

  tampilinProses = () => {
    return (
      <View>
        <ActivityIndicator animating={this.state.muterin} size="large" color="teal" hidesWhenStopped={true} />
      </View>
    );
  }

  tampilinData = () => {
    return (
      <View>
        <Text style={styles.welcome}>Welcomee to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <TheButton onPress={this.tombolDipijit} text="Pijit Aku"/>
        <View style={styles.contentContainer}>
          {this.tampilinTampilan()}
        </View>
      </View>
    );
  }
}
