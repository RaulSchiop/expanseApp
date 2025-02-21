import { View, Text, StyleSheet, ScrollView } from "react-native";
import IconsCategory from "@/components/IconsCategory";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from '@expo/vector-icons/Feather';

export default function Catrgory() {
   return (
      <ScrollView style={styles.container}>
         <View style={styles.containerSection}>
            <Text style={styles.title}>Health & Fitness</Text>
            <View style={styles.iconsContainer}>
               <IconsCategory title="Run" bgColor="#ebd4ef">
                  <FontAwesome5 name="running" size={24} color="#ad4bbc" />
               </IconsCategory>
               <IconsCategory title="Doctor" bgColor="#f4bcbd">
                  <MaterialCommunityIcons
                     name="doctor"
                     size={24}
                     color="#dc2327"
                  />
               </IconsCategory>
               <IconsCategory title="Medicine" bgColor="#e5e2e3">
                  <MaterialCommunityIcons name="pill" size={24} color="black" />
               </IconsCategory>
               <IconsCategory title="Gym" bgColor="#d1d3ff">
                  <FontAwesome5 name="dumbbell" size={24} color="#8287ff" />
               </IconsCategory>
            </View>
         </View>
         <View style={styles.containerSection}>
            <Text style={styles.title}>Food & Shopping</Text>
            <View style={styles.iconsContainer}>
               <IconsCategory title="Grocery" bgColor="#c4ecd2">
                  <MaterialIcons
                     name="local-grocery-store"
                     size={24}
                     color="#3cbb69"
                  />
               </IconsCategory>
               <IconsCategory title="Coffee" bgColor="#b8c0e8">
                  <FontAwesome name="coffee" size={24} color="#485dc2" />
               </IconsCategory>
               <IconsCategory title="Drinks" bgColor="#adedff">
                  <Entypo name="drink" size={24} color="#00c8ff" />
               </IconsCategory>
               <IconsCategory title="Restaurant" bgColor="#fffbdf">
                  <Ionicons name="restaurant" size={24} color="#f5ce0a" />
               </IconsCategory>
            </View>
         </View>
         <View style={styles.containerSection}>
            <Text style={styles.title}>Bills & Utilities</Text>
            <View style={styles.iconsContainer}>
               <IconsCategory title="Phone" bgColor="#fdb9e3">
                  <Entypo name="old-phone" size={24} color="#f947b5" />
               </IconsCategory>
               <IconsCategory title="Water" bgColor="#b5d5ff">
                  <Entypo name="water" size={24} color="#0070ff" />
               </IconsCategory>
               <IconsCategory title="Heating" bgColor="#f3b8b2">
                  <FontAwesome6
                     name="fire-flame-curved"
                     size={24}
                     color="#dd3222"
                  />
               </IconsCategory>
               <IconsCategory title="Internet" bgColor="#d1d3ff">
                  <FontAwesome name="wifi" size={24} color="#034efc" />
               </IconsCategory>
            </View>
         </View>
         <View style={styles.containerSection}>
            <Text style={styles.title}>Shopping</Text>
            <View style={styles.iconsContainer}>
               <IconsCategory title="Clothes" bgColor="#ced1d5">
                  <FontAwesome5 name="tshirt" size={24} color="black" />
               </IconsCategory>
               <IconsCategory title="Beauty" bgColor="#ffbfc8">
                  <MaterialCommunityIcons
                     name="lipstick"
                     size={24}
                     color="#ff0022"
                  />
               </IconsCategory>
               <IconsCategory title="Furniture" bgColor="#fabd90">
                  <MaterialCommunityIcons
                     name="table-furniture"
                     size={24}
                     color="#6c3105"
                  />
               </IconsCategory>
               <IconsCategory title="Tehnology" bgColor="#d1d3ff">
                  <Feather name="smartphone" size={24} color="#2459db" />
               </IconsCategory>
            </View>
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.light.background,
   },
   containerSection: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      paddingBottom: 40,
      borderRadius: 10,
      width: "90%",
      gap: 30,
      alignItems: "center",
      alignSelf: "center",
      justifyContent: "center",
      backgroundColor: "#f6f6f6",
      marginVertical: 10,
   },
   iconsContainer: {
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      width:'100%'
   },
   title: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
   },
});
