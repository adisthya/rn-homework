import React, { Component } from 'react';
import { FlatList, Text, Image, View } from 'react-native';
import styles from './Shared.styles';

export default class ListView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <FlatList
        data={data}
        renderItem={this.buildList}
        keyExtractor={(item, index) => item + index}
      />
    );
  }

  buildList = ({item, index}) => {
    return (
      <View style={styles.listItems}>
        <Image source={{uri:item.image}} style={styles.listItemImage} />
        <View>
          <Text style={styles.textCompany}>{item.name}</Text>
          <Text style={styles.textAddress}>{item.address}</Text>
        </View>
      </View>
    );
  }
}
