import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
   return (
      <GestureHandlerRootView
         style={{ flex: 1, backgroundColor: Colors.light.background }}
      >
         <Stack
            screenOptions={{
               headerTintColor: Colors.light.accent,
               headerShadowVisible: false,
            }}
         >
            <Stack.Screen
               name="(tabs)"
               options={{ title: "Home", headerShown: false }}
            />
            <Stack.Screen
               name="(add)"
               options={{ title: "Add transactions", headerShown: false }}
            />
         </Stack>
      </GestureHandlerRootView>
   );
}
