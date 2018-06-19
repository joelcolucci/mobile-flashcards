import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
});

function Container(props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
