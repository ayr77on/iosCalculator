/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  Text,
  View,
} from 'react-native';
import CalculatorScreen from './presentation/screens/CalculatorScreen';
import { styles } from './presentation/config/theme/app-theme';

function App() {
  return (
    <View style={styles.background}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'black'}
      />
     {/* <Text>Hola Mundo</Text> */}
     <CalculatorScreen></CalculatorScreen>
    </View>
  );
}


export default App;
