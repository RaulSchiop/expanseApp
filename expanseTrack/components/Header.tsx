import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function Header() {
   return (
      <View style={styles.container}>
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
         <Pressable
            style={{
               backgroundColor: Colors.light.accent,
               alignItems: "center",
               justifyContent: "center",
               padding: 8,
               borderRadius: 100,
            }}
         >
            <Ionicons name="add" color="white" size={25}></Ionicons>
         </Pressable>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      padding: 16,
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
});
