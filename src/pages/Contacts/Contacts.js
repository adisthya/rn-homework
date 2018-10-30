/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { gettingNames, getNames, getNamesDone } from '../../redux/actions';

import styles from '../Generic.styles';
import TheButton from '../../shared/Button';
import TheList from '../../shared/ListView';
import TheDefaultView from '../../shared/DefaultView';

class Contacts extends Component {

  constructor(props) {
    super(props);
  }

  tombolDitekan = () => {
    const { gettingNames } = this.props;
    gettingNames();
    this.tarikData();
  }

  tarikData = () => {
    const { getNames } = this.props;
    getNames();
  }

  tampilinProses = () => {
    const { muterin } = this.props;
    return ( <TheDefaultView muterin={muterin} /> );
  }

  tampilinData = () => {
    const { names } = this.props;
    return ( <TheList data={names} /> );
  }

  render() {
    const { muterin, names } = this.props;
    return (
      <View style={styles.container}>
        <TheButton onPress={this.tombolDitekan} text="Get Names"/>
        <View style={styles.contentContainer}>
          { (muterin || names.length === 0) ? this.tampilinProses() : this.tampilinData() }
        </View>
      </View>
    );
  }
}

// export default Contacts;

const mapStateToProps = (state) => ({
  muterin: state.muterin,
  names: state.names,
});

const mapDispatchToProps = {
  getNames,
  gettingNames,
  getNamesDone
}

export default connect(mapStateToProps, mapDispatchToProps) (Contacts);
