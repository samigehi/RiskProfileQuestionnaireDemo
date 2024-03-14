import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./src/presentation/screens/WelcomeScreen";
import QuestionnairePage from "./src/presentation/screens/QuestionnairePage";
import ResultScreem from "./src/presentation/screens/ResultScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // here we will add 3 screens in our navigation stack - I would recommennd to use Pager for Questions for performance and efficency
    //1. Welcome Screen
    //2. Question Screen 
    //3. Result Screen
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Risk Profile"
          component={QuestionnairePage}
          options={{
            title: "Questionnaire",
            headerStyle: {
              backgroundColor: "#fac782",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="Result"
          component={ResultScreem}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}