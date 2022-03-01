import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./context/authContext";
import ScreensNav from "./components/Nav/ScreensNav";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <ScreensNav />
      </AuthProvider>
    </NavigationContainer>
  );
}
