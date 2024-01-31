import React, {useRef} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {LOGIN_STRINGS} from '../../Constants';
import {loginStyles as styles} from './Styles';

const NameInput = ({name}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text>{LOGIN_STRINGS.NAME}: </Text>
      <TextInput
        onChangeText={text => (name.current = text)}
        placeholder={LOGIN_STRINGS.NAME_PLCHLDR}
      />
    </View>
  );
};

const PasswordInput = ({password}) => {
  return (
    <View style={styles.inputWrapper}>
      <Text>{LOGIN_STRINGS.PASSWORD}: </Text>
      <TextInput
        onChangeText={text => (password.current = text)}
        secureTextEntry={true}
        placeholder={LOGIN_STRINGS.PASS_PLCHLDR}
      />
    </View>
  );
};

const LoginSectionHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{LOGIN_STRINGS.LOGIN}</Text>
    </View>
  );
};

const LoginButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.loginButtonWrapper}>
      <Text style={styles.loginButtonText} onPress={onPress}>
        {LOGIN_STRINGS.LOGIN}
      </Text>
    </TouchableOpacity>
  );
};

export const LoginScreen = () => {
  const name = useRef('');
  const password = useRef('');

  return (
    <View>
      <LoginSectionHeader />
      <NameInput name={name} />
      <PasswordInput password={password} />
      <LoginButton onPress={() => null} />
    </View>
  );
};
