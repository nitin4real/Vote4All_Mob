import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {authStyles as styles} from '../Styles';

export const AuthButton = ({onPress, buttonText}) => {
  return (
    <TouchableOpacity style={styles.loginButtonWrapper}>
      <Text style={styles.loginButtonText} onPress={onPress}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};
