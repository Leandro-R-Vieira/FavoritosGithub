import * as React from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>     
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerTitleAlign: 'center', 
          headerBackTitleVisible: false,
          headerStyle: {
          backgroundColor: '#254e6b',
          },
          headerTintColor: '#fff',
        }}
        />
        <Stack.Screen 
          name="User"
          component={User}
          options={{
            title: "Repositórios",
            headerTitleAlign: "center",
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#254e6b",
            },
            headerTintColor: "#FFF",
           }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;

