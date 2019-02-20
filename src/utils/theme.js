import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const size = {
  medium: 18,
  large: 22,
  small: 16,
  extraSmall: 12
};

const theme = {
  primaryColor: '#004f93',
  secondaryColor: '#c56a36',
  borderColor: '#fff',
  textColor: '#fff',
  fontExtraSmall: size.extraSmall,
  fontSmall: size.small,
  fontMedium: size.medium,
  fontLarge: size.large,
  primaryHeight: height / 5,
  secondaryHeight: height / 3,
  activeHeight: height / 4.78,
  primaryWidth: width / 5.53,
  secondaryWidth: width / 3,
  activeWidth: width / 4.78
};

export default theme;