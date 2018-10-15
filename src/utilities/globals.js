import { Constants } from 'expo';
import { Platform, Dimensions } from 'react-native';

let constants = Constants;
let platform = Platform;
let dimensions = Dimensions;

if (process.env.NODE_ENV === 'test') {
  constants = {
    platform: {
      ios: {
        model: 'iPhone 6'
      }
    },
    manifest: {}
  };
  platform = {
    OS: 'ios'
  };
  dimensions = {
    get() {
      return {
        height: 800,
        width: 600
      };
    }
  };
}

export const isIphone10 = platform.OS === 'ios' && constants.platform.ios.model === 'iPhone X';
export const isIpad = platform.OS === 'ios' && constants.platform.ios.model.indexOf('iPad') > -1;
export const isAndroid = platform.OS === 'android';
export const window = dimensions.get('window');
export const shortWindow = window.height < 700;

const releaseChannel = constants.manifest.releaseChannel;
let hasReleaseChannel = false;
if (releaseChannel) {
  hasReleaseChannel = releaseChannel === 'staging' ||
    releaseChannel === 'monkeybars';
}

export const isDev = __DEV__ || hasReleaseChannel;
