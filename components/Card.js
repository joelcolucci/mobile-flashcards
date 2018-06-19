import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
    padding: 15
  }
});

function Card(props) {
  return (
    <View style={styles.card}>
      {props.children}
    </View>
  );
}

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
