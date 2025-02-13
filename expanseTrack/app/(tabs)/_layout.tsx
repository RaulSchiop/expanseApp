import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Platform, View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function TabLayout() {
   return (
      <View style={{ flex: 1, backgroundColor: "white" }}>
         <Tabs
            screenOptions={{
               headerShown: false,
               tabBarActiveTintColor: "white",
               tabBarInactiveTintColor: Colors.light.secondary,
               tabBarShowLabel: false,

               tabBarStyle: {
                  backgroundColor: Colors.light.accent,
                  alignSelf: "center",
                  height: 50,
                  width: "90%",
                  borderRadius: 30,
                  marginBottom: Platform.OS === "ios" ? 20 : 10,
                  flexDirection: "row",
                  borderTopWidth: 0,
                  alignItems: "center",
                  justifyContent: "center",
               },
               tabBarItemStyle: {
                  flex: 1,
                  flexDirection:Platform.OS==="android"?'row':"column",
                  justifyContent: "center",
                  alignItems: "center",
               },
            }}
         >
            <Tabs.Screen
               name="index"
               options={{
                  title: "Home",
                  tabBarIcon: ({ color }) => (
                     <Ionicons name="home-outline" size={28} color={color} />
                  ),
               }}
            />
            <Tabs.Screen
               name="statistics"
               options={{
                  title: "Stats",
                  tabBarIcon: ({ color }) => (
                     <Ionicons name="stats-chart" size={28} color={color} />
                  ),
               }}
            />

            <Tabs.Screen
               name="raport"
               options={{
                  title: "Raport",
                  tabBarIcon: ({ color }) => (
                     <Ionicons
                        name="pie-chart-outline"
                        size={28}
                        color={color}
                     />
                  ),
               }}
            />

            <Tabs.Screen
               name="profile"
               options={{
                  title: "Profile",
                  tabBarIcon: ({ color }) => (
                     <Ionicons name="person" size={28} color={color} />
                  ),
               }}
            />
         </Tabs>
      </View>
   );
}
