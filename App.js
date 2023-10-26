import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen'
import LoyaltyPoints from './pages/LoyaltyPoints'
import ShortScreen from './pages/ShortScreen'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen}
    options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
          // tabBarBadge: 3,
        }}/>
    <Tab.Screen name="Shorts" component={ShortScreen}
    options={{
          tabBarLabel: 'Shorts',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="video-check-outline" color={color} size={size} />
            ),
            // tabBarBadge: 3,
          }}/>
          <Tab.Screen name="Loyalty Points" component={LoyaltyPoints}
          options={{
                tabBarLabel: 'Loyalty Points',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="scoreboard-outline" color={color} size={size} />
                ),
                // tabBarBadge: 3,
              }}/>
    </Tab.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
