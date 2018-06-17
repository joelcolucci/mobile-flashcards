import { Constants } from 'expo';
import PropTypes from 'prop-types';
import React from 'react';
import { View, StatusBar } from 'react-native';

function AppStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

AppStatusBar.propTypes = {
  backgroundColor: PropTypes.string
};

export default AppStatusBar;
