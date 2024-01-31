import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {authStyles as styles} from '../Styles';

export const InputField = ({
  inputRef,
  inputName,
  placeholder,
  secure = false,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text>{inputName}: </Text>
      <TextInput
        onChangeText={text => (inputRef.current = text)}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
    </View>
  );
};
