import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Pressable, View, Text, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Layout() {
   const router = useRouter();
   return (
      <View style={{ flex: 1, backgroundColor: Colors.light.background }}>
         <Stack
            screenOptions={{
               headerTintColor: Colors.light.accent,
               headerShadowVisible: false,
            }}
         >
            <Stack.Screen
               name="addExpense"
               options={{
                  title: "Add transaction",
                  headerLeft: () => {
                     return (
                        <Pressable
                           onPress={() => router.back()}
                           style={{
                              flexDirection: "row",
                              alignItems: "center",
                              gap: 5,
                              marginRight:Platform.OS==='android'? 30:0
                           }}
                        >
                           <AntDesign
                              name="left"
                              size={26}
                              color={Colors.light.accent}
                           />
                           <Text
                              style={{
                                 fontSize: 18,
                                 color: Colors.light.accent,
                              }}
                           >
                              Back
                           </Text>
                        </Pressable>
                     );
                  },
               }}
            />

            <Stack.Screen name="Category" options={{ title: "Categories" }} />
         </Stack>
      </View>
   );
}
