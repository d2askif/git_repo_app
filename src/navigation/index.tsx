import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RepoContainer from '../containers/RepoContainer';
import RepoDetail from '../containers/RepoDetail';

import React from 'react';
import {Repo} from '../redux/store/types';
export type StackParamList = {
  Home: undefined;
  Detail: {repo: Repo};
};
const Stack = createStackNavigator<StackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={RepoContainer} />
        <Stack.Screen
          name="Detail"
          component={RepoDetail}
          options={{
            title: 'Profile',
            headerTintColor: '#424144',
            headerBackTitle: '',
            headerBackTitleVisible: false,
            headerStyle: {
              elevation: 2,
              backgroundColor: '#CDE1F6',
              height: 148,
              shadowColor: '#CDE1F6',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
