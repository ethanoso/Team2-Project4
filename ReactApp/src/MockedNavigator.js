// This is used by test to mock the functionality of useNavigate from react-router\
// This was pieced together from various other problem solutions on stack exchange after a full day of troubleshooting

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const MockedNavigator = ({ component, params = {} }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={ component }
          initialParams={ params }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MockedNavigator;