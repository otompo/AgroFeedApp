import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../../screens/Signup";
import Signin from "../../screens/Signin";
import Home from "../../screens/Home";
import WelcomeScreen from "../../screens/WelcomeScreen";
import { AuthContext } from "../../context/authContext";
import HeaderTabs from "./HeaderTabs";
import colors from "../../config/colors";

const Stack = createNativeStackNavigator();

export default function ScreensNav() {
  const [state, setState] = useContext(AuthContext);
  const authenticated = state && state.token !== "" && state.user !== null;

  //   console.log(authenticated);
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerShown: false,
      }}
    >
      {authenticated ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Dashboard",
              headerRight: () => <HeaderTabs />,
              headerShown: true,
              // headerBackground: colors.primary,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Signin" component={Signin} />
        </>
      )}
    </Stack.Navigator>
  );
}
