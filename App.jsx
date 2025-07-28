import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Explore from './src/screens/Explore';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"> {/* ✅ Optional but recommended */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator /> {/* ✅ This is fine */}
    </NavigationContainer>
  );
};

export default App;
