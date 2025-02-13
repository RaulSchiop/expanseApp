import { ScrollView, StyleSheet, View } from "react-native";
import { Colors } from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/Header";
import ToggleTime from "@/components/ToggleTime";
import Balance from "@/components/Balance";
import Transactions from "@/components/Transactions";

export default function HomePage() {
   return (
      <ScrollView style={styles.container}>
         <StatusBar
            backgroundColor={Colors.light.background}
            style="dark"
         ></StatusBar>
         <View style={{alignItems: "center" }}>
            <Header />
            <ToggleTime></ToggleTime>
            <Balance></Balance>
            <Transactions></Transactions>
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginTop: 40,
      backgroundColor: Colors.light.background,
     
   },
});
