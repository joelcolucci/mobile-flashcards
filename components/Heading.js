import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

let styles = StyleSheet.create({
  heading: {
    fontSize: 24
  }
});

function Heading(props) {
  return (
    <Text style={styles.heading}>{props.children}</Text>
  );
}

Heading.propTypes = {
  children: PropTypes.node
};

export default Heading;
