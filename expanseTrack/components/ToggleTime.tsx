import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { useState } from "react";

export default function ToggleTime() {
   const [presed, setPresed] = useState<number>(1);
   // 1 for week
   // 2 for month
   // 3 for year

   function handlePess1(): void {
      setPresed(1);
   }
   function handlePess2(): void {
      setPresed(2);
   }

   function handlePess3(): void {
      setPresed(3);
   }

   return (
      <View style={styles.container}>
         <Pressable
            style={[styles.pressContainer, presed === 1 && styles.pressed]}
            onPress={handlePess1}
         >
            <Text style={presed === 1 ? [styles.text] : null}>This Week</Text>
         </Pressable>

         <Pressable
            style={[styles.pressContainer, presed === 2 && styles.pressed]}
            onPress={handlePess2}
         >
            <Text style={presed === 2 ? [styles.text] : null}>This Month</Text>
         </Pressable>

         <Pressable
            style={[styles.pressContainer, presed === 3 && styles.pressed]}
            onPress={handlePess3}
         >
            <Text style={presed === 3 ? [styles.text] : null}>This Year</Text>
         </Pressable>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: 20,
      backgroundColor: Colors.light.secondary,
      width: "90%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: 10,
      padding: 5,
   },
   pressContainer: {
      flex: 1,
      alignItems: "center",
      paddingVertical: 10,
   },
   text: {
      fontWeight: "bold",
      color: Colors.light.text,
   },
   pressed: {
      borderRadius: 10,
      backgroundColor: Colors.light.background,
      padding: 10,
   },
});
