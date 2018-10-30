import React, { Component } from 'react';
import { View, Text, ActivityIndicator }from 'react-native';
import styles from './Shared.styles';

export default class DefaultView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { muterin } = this.props;
    return (
      <View style={styles.prosesContainer}>
        {
          muterin ?
          <ActivityIndicator animating={muterin} size="large" color="teal" hidesWhenStopped={true} />
          :
          <Text style={styles.textJudul}>Belum ada data.</Text>
        }
      </View>
    )
  }
}
