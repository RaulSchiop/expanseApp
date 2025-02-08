import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
export default function TabLayout() {
   return (
      <Tabs
         screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#e0520b",
            headerShadowVisible: false,
         }}
      >
         <Tabs.Screen
            name="index"
            options={{
               title: "Home",
               tabBarIcon: ({ color }) => (
                  <Ionicons name="home-outline" size={24} color={color} />
               ),
            }}
         />
         <Tabs.Screen
            name="statistics"
            options={{
               title: "Stats",
               tabBarIcon: ({ color }) => (
                  <Ionicons name="stats-chart" size={24} color={color} />
               ),
            }}
         />

         <Tabs.Screen
            name="raport"
            options={{
               title: "Raport",
               tabBarIcon: ({ color }) => (
                  <Ionicons name="pie-chart-outline" size={24} color={color} />
               ),
            }}
         />

         <Tabs.Screen
            name="profile"
            options={{
               title: "Profile",
               tabBarIcon: ({ color }) => (
                  <Ionicons name="person" size={24} color={color} />
               ),
            }}
         />
      </Tabs>
   );
}
