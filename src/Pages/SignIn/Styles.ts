import {StyleSheet} from 'react-native';
import {dimens, themeColors} from '../../Constants';

export const authStyles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    marginHorizontal: dimens.size20,
    justifyContent: 'space-between',
    borderWidth: dimens.size1,
    alignItems: 'center',
    paddingHorizontal: dimens.size20,
    marginVertical: dimens.size10,
    borderRadius: dimens.size5,
    borderColor: themeColors.primaryTextInputBorder,
  },
  loginButtonWrapper: {
    alignSelf: 'center',
    borderWidth: dimens.size1,
    paddingVertical: dimens.size8,
    paddingHorizontal: dimens.size30,
    marginTop: dimens.size20,
    borderRadius: dimens.size5,
    backgroundColor: themeColors.primaryBtnBg,
  },
  loginButtonText: {
    fontSize: dimens.size30,
    color: themeColors.white,
  },
  loginHeaderContainer: {
    alignSelf: 'center',
    marginVertical: '30%',
  },
  signupHeaderContainer: {
    alignSelf: 'center',
    marginVertical: '15%',
  },
  headerText: {
    fontSize: dimens.size50,
  },
  toggleScreenContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '5%',
  },
  toggleClickableText: {
    fontWeight: '500',
  },
});
