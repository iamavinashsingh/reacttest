// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

// const StackNavigator = () => {
//   return (
//     <Stack.Navigator initialRouteName="Home"
//       screenOptions={{
//         headerStyle: { backgroundColor: 'blue' },
//         headerTintColor: '#fff',
//         headerTitleStyle: { fontWeight: 'bold' },
//         headerTitleAlign: 'center',
//         headerBackVisible: false,
//       }}
//     > 
//       <Stack.Screen 
//         name="Home" 
//         component={Home}  
        
//       />
//       <Stack.Screen 
//         name="Explore" 
//         component={Explore} 
        
//       />
//       <Stack.Screen 
//         name="Profile" 
//         component={Profile} 
        
//       />
//     </Stack.Navigator>
//   );
// };

const TabNavigator = () =>{
  return (
    <Tab.Navigator 
    screenOptions={{headerShown: false}}>
      <Tab.Screen   
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={25} color='red' />
          )
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={Explore} 
      />
      <Tab.Screen   
        name="Profile" 
        component={Profile}
      />
    </Tab.Navigator>
  );
  
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;