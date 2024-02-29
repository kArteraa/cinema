import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MovieListScreen from './MovieListScreen';
import MovieScreen from './MovieScreen';
import TicketsScreen from './TicketsScreen';
import ProfileScreen from './ProfileScreen';
import SigninScreen from './SigninScreen';
import SignupScreen from './SignupScreen';
const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
        
            <Stack.Navigator>  
                <Stack.Screen
                    name="Home"
                    component={MovieListScreen}
                    options={{ title: 'Фильмы' }}
                />
                <Stack.Screen name="Movie" component={MovieScreen} options={{ title: 'Фильм' }} />
                <Stack.Screen name="Tickets" component={TicketsScreen} options={{ title: 'Бронированние билетов' }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }} />
                <Stack.Screen name="Signin" component={SigninScreen} options={{ title: 'Авторизация' }} />
                <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Регистрация' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
