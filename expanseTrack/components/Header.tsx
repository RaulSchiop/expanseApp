import {
   View,
   Text,
   Image,
   Pressable,
   StyleSheet,
   Animated,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";

export default function Header() {
   const fadeAnim = new Animated.Value(0);
   const scale = new Animated.Value(1);
   const scale2 = new Animated.Value(0.5);
   
   useEffect(() => {
      Animated.timing(scale2, {
         toValue: 1,
         duration: 500,
         useNativeDriver: true,
      }).start();

      Animated.timing(fadeAnim, {
         toValue: 1,
         duration: 500,
         useNativeDriver: true,
      }).start();
   }, []);

   const animate = () => {
      Animated.timing(scale, {
         toValue: 0.75,
         duration: 300,
         useNativeDriver: true,
      }).start();
   };

   const reset = () => {
      Animated.timing(scale, {
         toValue: 1,
         duration: 500,
         useNativeDriver: true,
      }).start();
   };
   return (
      <Animated.View
         style={[
            styles.container,
            { opacity: fadeAnim, transform: [{ scale: scale2 }] },
         ]}
      >
         <View style={styles.profileContainer}>
            <Image
               source={require("../assets/images/profilePic.png")}
               style={{ width: 40, height: 40, borderRadius: 100 }}
            />
            <View style={styles.balanceContainer}>
               <Text style={{ color: Colors.light.textLight }}>Balance</Text>
               <Text
                  style={{
                     color: Colors.light.text,
                     fontSize: 20,
                     fontWeight: "bold",
                  }}
               >
                  $ 50,000
               </Text>
            </View>
         </View>
         <Animated.View style={[{ transform: [{ scale }] }]}>
            <Pressable
               onPressIn={animate}
               onPressOut={reset}
               style={({ pressed }) =>
                  pressed ? [styles.button, styles.pressed] : [styles.button]
               }
            >
               <Ionicons name="add" color="white" size={25}></Ionicons>
            </Pressable>
         </Animated.View>
      </Animated.View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginTop: 10,

      flexDirection: "row",
      justifyContent: "space-between",
   },
   profileContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
   },
   balanceContainer: {
      justifyContent: "center",
   },
   button: {
      backgroundColor: Colors.light.accent,

      alignItems: "center",
      justifyContent: "center",
      padding: 8,
      borderRadius: 100,
      width: 40,
      height: 40,
   },
   pressed: {
      opacity: 0.8,
   },
});
