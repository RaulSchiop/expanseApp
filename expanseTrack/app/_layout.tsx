import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { View } from "react-native";
export default function Layout() {
   return (
      <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
         <Stack
            screenOptions={{
               headerTintColor: Colors.light.accent,
               headerShadowVisible:false
            }}
            
         >
            <Stack.Screen
               name="(tabs)"
               options={{ title: "Home", headerShown: false }}
            />
            <Stack.Screen
               name="addExpense"
               options={{ title: "Add transaction" }}
            />
         </Stack>
      </View>
   );
}
