import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListUser from "./listUser";
import AddUser from "./addUser";

const CRUD = () => {
    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer independent = "true">
            <Stack.Navigator>
                <Stack.Screen name = "ListUser" component = {ListUser} options = {{headerShown: false}}/>
                <Stack.Screen name = "AddUser" component = {AddUser} options = {{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default CRUD;