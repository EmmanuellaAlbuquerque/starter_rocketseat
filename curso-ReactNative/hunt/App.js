import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './src/pages/main';
import Product from './src/pages/product';
import './src/config/StatusBarConfig';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="JSHunt" component={Main} />
        <Stack.Screen name="ProductDetail" component={Product} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
