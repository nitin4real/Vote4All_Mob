import React, {useRef} from 'react';
import {View} from 'react-native';
import {SignupSectionHeader} from './AuthComponents/SignupSectionHeader';
import {InputField} from './AuthComponents/NameInput';
import {AUTH_STRINGS} from '../../Constants';
import {AuthButton} from './AuthComponents/AuthButton';
import {ToggleAuth} from './AuthComponents/ToggleAuth';

export const SignUpScreen = () => {
  const nameRef = useRef('');
  const passwordRef = useRef('');
  const phoneRef = useRef('');
  const emailRef = useRef('');
  return (
    <View>
      <SignupSectionHeader />
      <InputField
        inputRef={nameRef}
        inputName={AUTH_STRINGS.NAME}
        placeholder={AUTH_STRINGS.NAME_PLCHLDR}
      />
      <InputField
        inputRef={phoneRef}
        inputName={AUTH_STRINGS.PHONE}
        placeholder={AUTH_STRINGS.PHONE}
      />
      <InputField
        inputRef={emailRef}
        inputName={AUTH_STRINGS.EMAIL}
        placeholder={AUTH_STRINGS.EMAIL}
      />
      <InputField
        inputRef={passwordRef}
        inputName={AUTH_STRINGS.PASSWORD}
        placeholder={AUTH_STRINGS.PASS_PLCHLDR}
        secure={true}
      />
      <AuthButton buttonText={AUTH_STRINGS.SINGUP} onPress={() => null} />
      <ToggleAuth
        message={AUTH_STRINGS.ALREADY_HAVE_ACC}
        screenName={AUTH_STRINGS.LOGIN}
        navigate={() => null}
      />
    </View>
  );
};
