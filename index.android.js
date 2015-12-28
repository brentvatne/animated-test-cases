'use strict';

import { AppRegistry } from 'react-native';

AppRegistry.registerComponent('SimpleReddit', () => require('./App/Examples/SuperSimpleExample'));

// comment the SuperSimpleExample above and uncomment the NavigationJankyExample below
// to test it out with Animated powered Navigator
// AppRegistry.registerComponent('SimpleReddit', () => require('./App/Examples/NavigationJankyExample'));
