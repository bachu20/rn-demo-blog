import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import Index from "./src/screens/Index";
import Show from "./src/screens/Show";
import Modify from "./src/screens/Modify";

import { Provider as BlogProvider } from "./src/context/Blog";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={Index}
          options={({ navigation }) => ({
            title: "Blog List",
            headerRight: () => (
              <Ionicons
                name="ios-add-sharp"
                size={30}
                color="black"
                onPress={() => navigation.navigate("Modify", { isNew: true })}
              />
            ),
          })}
        />

        <Stack.Screen
          name="Show"
          component={Show}
          options={({ navigation, route }) => ({
            title: "Blog List",
            headerRight: () => (
              <Ionicons
                name="pencil-outline"
                size={25}
                color="black"
                onPress={() =>
                  navigation.navigate("Modify", {
                    id: route.params.id,
                    isNew: false,
                  })
                }
              />
            ),
          })}
        />

        <Stack.Screen
          name="Modify"
          component={Modify}
          options={{ title: "Blog List" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => (
  <BlogProvider>
    <App />
  </BlogProvider>
);
