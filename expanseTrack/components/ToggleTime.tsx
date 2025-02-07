import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";

export default function ToggleTime() {
   const [presed, setPresed] = useState<number>(1);
   // 1 for week
   // 2 for month
   // 3 for year
   const fadeIn = new Animated.Value(0);
   const scale = new Animated.Value(0.5);

   useEffect(() => {
      Animated.timing(fadeIn, {
         toValue: 1,
         duration: 1000,
         useNativeDriver: true,
      }).start();

      Animated.timing(scale, {
         toValue: 1,
         duration: 1000,
         useNativeDriver: true,
      }).start();
   }, []);

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
      <Animated.View
         style={[styles.container, { opacity: fadeIn, transform: [{ scale }] }]}
      >
         <Pressable
            style={[styles.pressContainer, presed === 1 && styles.pressed]}
            onPress={handlePess1}
         >
            <Text style={presed === 1 ? [styles.text] : styles.textInactive}>This Week</Text>
         </Pressable>

         <Pressable
            style={[styles.pressContainer, presed === 2 && styles.pressed]}
            onPress={handlePess2}
         >
            <Text style={presed === 2 ? [styles.text] : styles.textInactive}>This Month</Text>
         </Pressable>

         <Pressable
            style={[styles.pressContainer, presed === 3 && styles.pressed]}
            onPress={handlePess3}
         >
            <Text style={presed === 3 ? [styles.text] : styles.textInactive}>This Year</Text>
         </Pressable>
      </Animated.View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: 20,
      backgroundColor: "#b3b3b3",
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
   textInactive:{
    color:Colors.light.textLight
   }
});
