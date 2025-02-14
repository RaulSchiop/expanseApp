import { View, Text, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
export default function addEpense() {
   return (
      <View style={styles.container}>
         <Text>Expensae</Text>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,

      backgroundColor: Colors.light.background,
   },
});
