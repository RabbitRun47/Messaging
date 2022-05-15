import {Home} from './Home';
import {AddressMessages} from './AddressMessages';

export const SCREEN_NAMES = {
  HOME: 'Home',
  ADDRESS_MESSAGES: 'AddressMessages',
};

export const SCREEN_COMPONENTS = {
  HOME: Home,
  ADDRESS_MESSAGES: AddressMessages,
};

export const SCREEN_OPTIONS = {
  HOME: {title: 'Messages'},
  ADDRESS_MESSAGES: ({route}) => ({title: route.params.address}),
};
