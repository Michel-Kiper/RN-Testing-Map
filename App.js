import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';

Mapbox.setAccessToken('pk.eyJ1IjoibWFudGVxdWVyYSIsImEiOiJjamlnMTl6Z2gxMGxqM3Fyd2c0NGR3cG04In0.CyHmTD73AAROXoPEFKQxrw');

export default class App extends Component<{}> {
  render() {
    return (
        <Mapbox.MapView
            styleURL={'mapbox://styles/mantequera/cjigryvzf03z92spa470vde18'}
            zoomLevel={30}
            centerCoordinate={[11.256, 43.770]}
            style={styles.container}>
        </Mapbox.MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});