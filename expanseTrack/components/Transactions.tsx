import { Colors } from "@/constants/Colors";
import {
   View,
   Text,
   Pressable,
   StyleSheet,
   Animated,
   Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function Transactions() {
   const scale = new Animated.Value(0.5);
   const fade = new Animated.Value(0);

   useEffect(() => {
      Animated.timing(scale, {
         toValue: 1,
         duration: 500,
         useNativeDriver: true,
      }).start();

      Animated.timing(fade, {
         toValue: 1,
         duration: 500,
         useNativeDriver: true,
      }).start();
   }, []);

   return (
      <Animated.View
         style={[styles.container, { opacity: fade, transform: [{ scale }] }]}
      >
         <View
            style={{
               flexDirection: "row",
               alignItems: "center",
               justifyContent: "space-between",
               marginBottom: Platform.OS === "ios" ? 20 : 10,
            }}
         >
            <View
               style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
               }}
            >
               <FontAwesome5 name="coins" size={24} color="black" />
               <View>
                  <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                     Month buget
                  </Text>
                  <Text>$ 10.000</Text>
               </View>
            </View>
            <View>
               <Text>$ 160/day</Text>
            </View>
         </View>

         <View style={styles.conatinerTitle}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>
               Transactions
            </Text>
            <Pressable>
               <Text style={{ color: Colors.light.accent }}>See all</Text>
            </Pressable>
         </View>
         <View style={styles.listContainer}>
            <View style={styles.cardContainer}>
               <View style={styles.dataContainer}>
                  <View
                     style={{
                        backgroundColor: "yellow",
                        padding: 10,
                        borderRadius: 10,
                     }}
                  >
                     <Ionicons
                        name="fast-food-outline"
                        size={24}
                        color="black"
                     />
                  </View>
                  <View>
                     <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        Food
                     </Text>
                     <Text>20 aprilie</Text>
                  </View>
               </View>
               <Text>$ 240</Text>
            </View>

            <View style={styles.cardContainer}>
               <View style={styles.dataContainer}>
                  <View
                     style={{
                        backgroundColor: "yellow",
                        padding: 10,
                        borderRadius: 10,
                     }}
                  >
                     <Ionicons
                        name="fast-food-outline"
                        size={24}
                        color="black"
                     />
                  </View>
                  <View>
                     <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        Food
                     </Text>
                     <Text>20 aprilie</Text>
                  </View>
               </View>
               <Text>$ 240</Text>
            </View>
            <View style={styles.cardContainer}>
               <View style={styles.dataContainer}>
                  <View
                     style={{
                        backgroundColor: "yellow",
                        padding: 10,
                        borderRadius: 10,
                     }}
                  >
                     <Ionicons
                        name="fast-food-outline"
                        size={24}
                        color="black"
                     />
                  </View>
                  <View>
                     <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        Food
                     </Text>
                     <Text>20 aprilie</Text>
                  </View>
               </View>
               <Text>$ 240</Text>
            </View>

            <View style={styles.cardContainer}>
               <View style={styles.dataContainer}>
                  <View
                     style={{
                        backgroundColor: "yellow",
                        padding: 10,
                        borderRadius: 10,
                     }}
                  >
                     <Ionicons
                        name="fast-food-outline"
                        size={24}
                        color="black"
                     />
                  </View>
                  <View>
                     <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                        Food
                     </Text>
                     <Text>20 aprilie</Text>
                  </View>
               </View>
               <Text style={{ fontWeight: "semibold" }}>$ 240</Text>
            </View>
         </View>
      </Animated.View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: Platform.OS==="android"?0:20,
      width: "100%",
      paddingHorizontal: 20,
   },
   conatinerTitle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom:10,
   },
   listContainer: {
      gap: 20,
      backgroundColor: "#e6e6e6",
      borderRadius: 10,
      padding: 10,
      marginTop: 10,
   },
   cardContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
   },
   dataContainer: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
      justifyContent: "center",
   },
});
