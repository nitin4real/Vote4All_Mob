import React from 'react';
import {Text, View} from 'react-native';
import {authStyles} from '../Styles';
import {AUTH_STRINGS} from '../../../Constants';

export const LoginSectionHeader = () => {
  return (
    <View style={authStyles.loginHeaderContainer}>
      <Text style={authStyles.headerText}>{AUTH_STRINGS.LOGIN}</Text>
    </View>
  );
};
