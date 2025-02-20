import { Ionicons } from "@expo/vector-icons";
import { View, StyleSheet, Text, Pressable, TextInput } from "react-native";
import { Colors } from "@/constants/Colors";

type Category = {
   nameIcon: keyof typeof Ionicons.glyphMap;
   children?: string;
   type: "Button" | "Input";
   onPress?:()=>void
};

export default function CategoryContainer({
   nameIcon,
   children,
   type,
   onPress
}: Category) {
   return type === "Button" ? (
      <Pressable onPress={onPress} style={styles.container}>
         <View style={styles.icon}>
            <Ionicons name={nameIcon} size={20} color="white"></Ionicons>
         </View>
         <Text style={styles.text}>{children}</Text>
      </Pressable>
   ) : (
      <View style={styles.containerInput}>
         <View>
            <Text style={styles.text}>Enter Amount</Text>
         </View>
         <TextInput
            style={[styles.text,{width:80,height:50}]}
            keyboardType="number-pad"
            autoCapitalize="none"
            placeholder="$00.00"
         ></TextInput>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      height: 80,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: "#efefef",
      paddingLeft: 20,
      marginVertical: 10,
      gap: 20,
      borderRadius: 10,
   },
   containerInput: {
      width: "100%",
      height: 80,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#efefef",
      paddingHorizontal: 20,
      marginVertical: 10,
      gap: 20,
      borderRadius: 10,
   },

   icon: {
      padding: 8,
      borderRadius: 100,
      backgroundColor: Colors.light.accent,
   },
   text: {
      fontSize: 20,
   },
});
