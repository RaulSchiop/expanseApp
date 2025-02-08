import { StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/Header";
import ToggleTime from "@/components/ToggleTime";
import Balance from "@/components/Balance";
import Transactions from "@/components/Transactions";

export default function HomePage() {
   return (
      <View style={styles.container}>
         <StatusBar backgroundColor={Colors.light.background} style="dark"></StatusBar>
         <Header />
         <ToggleTime></ToggleTime>
         <Balance></Balance>
         <Transactions></Transactions>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 40,
      backgroundColor: Colors.light.background,
      alignItems:'center'
   },
});
