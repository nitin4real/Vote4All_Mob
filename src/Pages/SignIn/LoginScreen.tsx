import React, {useRef} from 'react';
import {View} from 'react-native';
import {AUTH_STRINGS} from '../../Constants';
import {LoginSectionHeader} from './AuthComponents/LoginSectionHeader';
import {InputField} from './AuthComponents/NameInput';
import {AuthButton} from './AuthComponents/AuthButton';
import {ToggleAuth} from './AuthComponents/ToggleAuth';

export const LoginScreen = () => {
  const name = useRef('');
  const password = useRef('');

  return (
    <View>
      <LoginSectionHeader />
      <InputField
        inputRef={name}
        inputName={AUTH_STRINGS.NAME}
        placeholder={AUTH_STRINGS.NAME_PLCHLDR}
      />
      <InputField
        inputRef={password}
        inputName={AUTH_STRINGS.PASSWORD}
        placeholder={AUTH_STRINGS.PASS_PLCHLDR}
        secure={true}
      />
      <AuthButton buttonText={AUTH_STRINGS.LOGIN} onPress={() => null} />
      <ToggleAuth
        message={AUTH_STRINGS.DONT_HAVE_ACC}
        screenName={AUTH_STRINGS.SINGUP}
        navigate={() => null}
      />
    </View>
  );
};
