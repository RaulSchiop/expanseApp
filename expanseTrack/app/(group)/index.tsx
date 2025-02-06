import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/Header";

export default function HomePage() {
   return (
      <View style={styles.container}>
         <Header />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 0,
      backgroundColor: Colors.light.background,
   },
});
