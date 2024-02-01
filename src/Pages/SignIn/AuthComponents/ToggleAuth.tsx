import React from 'react';
import {Text, View} from 'react-native';
import {authStyles} from '../Styles';
import {AUTH_STRINGS} from '../../../Constants';

export const ToggleAuth = ({message, screenName, navigate}) => {
  return (
    <View style={authStyles.toggleScreenContainer}>
      <Text>{message}</Text>
      <Text style={authStyles.toggleClickableText} onPress={navigate}>
        {screenName} {AUTH_STRINGS.HERE}
      </Text>
    </View>
  );
};
