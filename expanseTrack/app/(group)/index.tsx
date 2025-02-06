import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/Header";
import ToggleTime from "@/components/ToggleTime";

export default function HomePage() {
   return (
      <View style={styles.container}>
         <Header />
         <ToggleTime></ToggleTime>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 0,
      backgroundColor: Colors.light.background,
      alignItems:'center'
   },
});
