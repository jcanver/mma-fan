import React from 'react';
import { View } from 'react-native';
import Platform from 'Platform';
import TouchableNativeFeedback from 'TouchableNativeFeedback';
import TouchableOpacity from 'TouchableOpacity';

const AndroidTouchable = ({ children, style, ...rest }) => {
  return (
    <TouchableNativeFeedback {...rest}>
      <View style={style}>
        {children}
      </View>
    </TouchableNativeFeedback>
  );
};

const TouchablePrim = {
  android: AndroidTouchable,
  ios: TouchableOpacity
};

export default TouchablePrim[Platform.OS];
