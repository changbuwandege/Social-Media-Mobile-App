/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home/Home';
import Profile from '../screen/Profile/Profile';
import {Routes} from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text} from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

const Tab1 = () => {
  return (
    <View>
      <Text>这是第1页！</Text>
    </View>
  );
};
const Tab2 = () => {
  return (
    <View>
      <Text>这是第2页！</Text>
    </View>
  );
};
const Tab3 = () => {
  return (
    <View>
      <Text>这是第3页！</Text>
    </View>
  );
};

export const ProfileTabNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          elevation: 0,
          zIndex: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Tab1'}
        component={Tab1}
        options={{//自定义选项框
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'照片'} isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'Tab2'}
        component={Tab2}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'视频'} isFocused={focused} />;
          },
        }}
      />
      <ProfileTabs.Screen
        name={'Tab3'}
        component={Tab3}
        options={{
          tabBarLabel: ({focused}) => {
            return <ProfileTabTitle title={'说说'} isFocused={focused} />;
          },
        }}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Routes.Home"
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
