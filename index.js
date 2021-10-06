/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async(remoteMessage) => {
    console.log("recebido no backGround index", remoteMessage)
});

AppRegistry.registerComponent(appName, () => App);
