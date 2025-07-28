import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: 'blue' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center',
        headerBackVisible: false,
      }}
    > 
      <Stack.Screen 
        name="Home" 
        component={Home}  
        
      />
      <Stack.Screen 
        name="Explore" 
        component={Explore} 
        
      />
      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator /> 
    </NavigationContainer>
  );
};

export default App;