import {
   View,
   Text,
   StyleSheet,
   Pressable,
   Animated,
   ScrollView,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import CategoryContainer from "@/components/CategoriesContainer";

export default function addEpense() {
   const navigation = useNavigation();
   const scale = new Animated.Value(1);
   const [presed, setPresed] = useState<number>(1);
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
         duration: 300,
         useNativeDriver: true,
      }).start();
   };

   useLayoutEffect(() => {
      navigation.setOptions({
         headerRight: () => {
            return (
               <Animated.View style={[{ transform: [{ scale }] }]}>
                  <Pressable
                     onPressIn={animate}
                     onPressOut={reset}
                     style={{ padding: 10, borderRadius: 100 }}
                  >
                     <Text style={styles.navButton}>Save</Text>
                  </Pressable>
               </Animated.View>
            );
         },
      });
   }, [navigation]);

   function handlePress(option: number) {
      setPresed(option);
   }

   return (
      <View style={styles.container}>
         <View style={styles.icnomeExpContainer}>
            <Pressable
               onPress={() => handlePress(1)}
               style={[
                  styles.headerChose,
                  presed === 1
                     ? { backgroundColor: Colors.light.accent }
                     : { backgroundColor: "#b3b3b3" },
               ]}
            >
               <Text style={styles.toggletext}>Income</Text>
            </Pressable>
            <Pressable
               onPress={() => handlePress(2)}
               style={[
                  styles.headerChose,
                  presed === 2
                     ? { backgroundColor: Colors.light.accent }
                     : { backgroundColor: "#b3b3b3" },
               ]}
            >
               <Text style={styles.toggletext}>Expense</Text>
            </Pressable>
            <Pressable
               onPress={() => handlePress(3)}
               style={[
                  styles.headerChose,
                  presed === 3
                     ? { backgroundColor: Colors.light.accent }
                     : { backgroundColor: "#b3b3b3" },
               ]}
            >
               <Text style={styles.toggletext}>Loan</Text>
            </Pressable>
         </View>
         <ScrollView style={styles.containerCategory}>
            <View style={{ alignItems: "center" }}>
               <CategoryContainer
                  type="Input"
                  nameIcon="grid"
               ></CategoryContainer>
               <CategoryContainer type="Button" nameIcon="grid">
                  Category
               </CategoryContainer>
               <CategoryContainer type="Button" nameIcon="pencil">
                  Write Note
               </CategoryContainer>
               <CategoryContainer type="Button" nameIcon="calendar">
                  Set date
               </CategoryContainer>
               {presed === 3 ? (
                  <CategoryContainer type="Button" nameIcon="stopwatch">
                     Set Reminder
                  </CategoryContainer>
               ) : (
                  ""
               )}
            </View>
         </ScrollView>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: Colors.light.background,
      padding: 20,
      alignItems: "center",
      width: "100%",
   },
   containerCategory: {
      flex: 1,
      width: "100%",
      marginTop: 30,
   },
   navButton: {
      fontSize: 20,
   },
   icnomeExpContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 10,
      width: "100%",
   },
   headerChose: {
      flex: 1,
      padding: 16,
      alignItems: "center",
      justifyContent: "center",

      borderRadius: 10,
   },
   toggletext: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
   },
});
