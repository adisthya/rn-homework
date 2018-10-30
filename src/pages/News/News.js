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
import { gettingNews, getNews, getNewsDone } from '../../redux/actions';

import styles from '../Generic.styles';
import TheButton from '../../shared/Button';
import TheList from '../../shared/ListView';
import TheDefaultView from '../../shared/DefaultView';

class News extends Component {

  constructor(props) {
    super(props);
  }

  tombolDitekan = () => {
    const { gettingNews } = this.props;
    gettingNews();
    this.tarikData();
  }

  tarikData = () => {
    const { getNews } = this.props;
    getNews();
  }

  tampilinProses = () => {
    const { muterin } = this.props;
    return ( <TheDefaultView muterin={muterin} /> );
  }

  tampilinData = () => {
    const { news } = this.props;
    return ( <TheList data={news} /> );
  }

  render() {
    const { muterin, news } = this.props;
    return (
      <View style={styles.container}>
        <TheButton onPress={this.tombolDitekan} text="Get News"/>
        <View style={styles.contentContainer}>
          { (muterin || news.length === 0) ? this.tampilinProses() : this.tampilinData() }
        </View>
      </View>
    );
  }
}

// export default News;

const mapStateToProps = (state) => ({
  muterin: state.muterin,
  news: state.news,
});

const mapDispatchToProps = {
  getNews,
  getNewsDone,
  gettingNews
}

export default connect(mapStateToProps, mapDispatchToProps) (News);
