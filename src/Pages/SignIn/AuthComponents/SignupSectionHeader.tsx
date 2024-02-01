import React from 'react';
import {Text, View} from 'react-native';
import {authStyles} from '../Styles';
import {AUTH_STRINGS} from '../../../Constants';

export const SignupSectionHeader = () => {
  return (
    <View style={authStyles.signupHeaderContainer}>
      <Text style={authStyles.headerText}>{AUTH_STRINGS.SINGUP}</Text>
    </View>
  );
};
