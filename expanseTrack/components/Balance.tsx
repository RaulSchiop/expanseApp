import { View, Text, StyleSheet, Animated, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Balance() {
   const scale = new Animated.Value(0.5);
   const fade = new Animated.Value(0);
   const scale2 = new Animated.Value(1);

   useEffect(() => {
      Animated.timing(fade, {
         toValue: 1,
         duration: 500,
         useNativeDriver: true,
      }).start();
      Animated.timing(scale, {
         toValue: 1,
         duration: 500,
         useNativeDriver: true,
      }).start();
   }, []);

   const animate = () => {
      Animated.timing(scale2, {
         toValue: 0.75,
         duration: 300,
         useNativeDriver: true,
      }).start();
   };

   const reset = () => {
      Animated.timing(scale2, {
         toValue: 1,
         duration: 500,
         useNativeDriver: true,
      }).start();
   };

   return (
      <Animated.View
         style={[
            { paddingVertical: 10, paddingHorizontal: 10 },
            { opacity: fade, transform: [{ scale }] },
         ]}
      >
         <View style={styles.container}>
            <View style={styles.viewIncome}>
               <Text style={{ color: Colors.dark.text, fontSize: 15 }}>
                  Income
               </Text>
               <Text
                  style={{
                     color: Colors.dark.text,
                     fontSize: 25,
                     fontWeight: "bold",
                  }}
               >
                  $ 50.000
               </Text>
            </View>
            <View style={styles.viewExpense}>
               <Text style={{ color: Colors.dark.text, fontSize: 15 }}>
                  Expense
               </Text>
               <Text
                  style={{
                     color: Colors.dark.text,
                     fontSize: 25,
                     fontWeight: "bold",
                  }}
               >
                  $ 30.000
               </Text>
            </View>
         </View>
         <Animated.View style={[{ transform: [{ scale: scale2 }] }]}>
            <Pressable
               onPressIn={animate}
               onPressOut={reset}
               style={styles.button}
            >
               <Text style={{ color: "white", fontWeight: "bold" }}>
                  View Report
               </Text>
               <Ionicons name="arrow-forward" size={24} color="white" />
            </Pressable>
         </Animated.View>
      </Animated.View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      width: "90%",
   },
   viewIncome: {
      width: "50%",
      backgroundColor: Colors.light.secondary,
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 10,
   },
   viewExpense: {
      width: "50%",
      backgroundColor: "#776255",
      paddingVertical: 20,
      paddingHorizontal: 20,
      borderRadius: 10,
   },
   button: {
      marginTop: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.light.accent,
      borderRadius: 10,
      gap: 10,
   },
});
