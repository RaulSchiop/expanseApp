import {
   View,
   Text,
   StyleSheet,
   Pressable,
   Animated,
   ScrollView,
   KeyboardAvoidingView,
   Platform,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import CategoryContainer from "@/components/CategoriesContainer";
import { useRouter } from "expo-router";
import ButtonSheet from "@/components/ButtonSheet";
import { TextInput } from "react-native-gesture-handler";
import { transform } from "@babel/core";

export default function addEpense() {
   const navigation = useNavigation();
   const scaleD = new Animated.Value(1);
   const scale = new Animated.Value(1);
   const scaleM = new Animated.Value(1);
   const scaleY = new Animated.Value(1);
   const [modal, setModal] = useState<boolean>(false);
   const [modal2, setModal2] = useState<boolean>(false);
   const [presed, setPresed] = useState<number>(1);
   const [reminder, setReminder] = useState<string>("");
   const router = useRouter();

   function handleRedirect(route: any) {
      router.push(route);
   }

   function handleModalClose() {
      setModal(false);
   }

   function handleModalOpen() {
      setModal(true);
   }

   function handleModalClose2() {
      setModal2(false);
   }

   function handleModalOpen2() {
      setModal2(true);
   }

   function handleRminderSellect(option: string) {
      setReminder(option);
      handleModalClose2();
   }

   function handlePress(option: number) {
      setPresed(option);
   }

   const animateDay = () => {
      Animated.timing(scaleD, {
         toValue: 0.75,
         duration: 300,
         useNativeDriver: true,
      }).start();
   };

   const resetDay = () => {
      Animated.timing(scaleD, {
         toValue: 1,
         duration: 300,
         useNativeDriver: true,
      }).start();
   };

   const animateMonth = () => {
      Animated.timing(scaleM, {
         toValue: 0.75,
         duration: 300,
         useNativeDriver: true,
      }).start();
   };

   const resetMonth = () => {
      Animated.timing(scaleM, {
         toValue: 1,
         duration: 300,
         useNativeDriver: true,
      }).start();
   };

   const animateYear = () => {
      Animated.timing(scaleY, {
         toValue: 0.75,
         duration: 300,
         useNativeDriver: true,
      }).start();
   };

   const resetYear = () => {
      Animated.timing(scaleY, {
         toValue: 1,
         duration: 300,
         useNativeDriver: true,
      }).start();
   };

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
               <Text style={styles.toggletext}>Recurent</Text>
            </Pressable>
         </View>
         <ScrollView style={styles.containerCategory}>
            <View style={{ alignItems: "center" }}>
               <CategoryContainer
                  type="Input"
                  nameIcon="grid"
               ></CategoryContainer>
               <CategoryContainer
                  type="Button"
                  nameIcon="grid"
                  onPress={() => handleRedirect("/Category")}
               >
                  Category
               </CategoryContainer>
               <CategoryContainer
                  type="Button"
                  nameIcon="pencil"
                  onPress={handleModalOpen}
               >
                  Write Note
               </CategoryContainer>
               <CategoryContainer
                  type="Button"
                  nameIcon="calendar"
                  onPress={handleModalOpen}
               >
                  Set Date
               </CategoryContainer>
               {presed === 3 ? (
                  <CategoryContainer
                     type="Button"
                     nameIcon="stopwatch"
                     onPress={handleModalOpen2}
                  >
                     Set Reminder
                  </CategoryContainer>
               ) : (
                  ""
               )}
            </View>
         </ScrollView>
         <ButtonSheet show={modal} onClose={handleModalClose} height="30%">
            <KeyboardAvoidingView
               behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
               <View>
                  <TextInput
                     keyboardType="default"
                     autoCapitalize="none"
                     style={styles.input}
                     placeholder="enter a note"
                     placeholderTextColor="white"
                  ></TextInput>
                  <Pressable style={styles.inputButton}>
                     <Text style={{ color: "white" }}>Submit</Text>
                  </Pressable>
               </View>
            </KeyboardAvoidingView>
         </ButtonSheet>

         <ButtonSheet show={modal2} onClose={handleModalClose2} height="30%">
            <KeyboardAvoidingView
               behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
               <View>
                  <Text style={{ alignSelf: "center" ,fontSize:20,fontWeight:'bold' }}>
                     Select when to get notfy
                  </Text>
                  <Animated.View style={[{ transform: [{ scale: scaleD }] }]}>
                     <Pressable
                        onPress={() => handleRminderSellect("day")}
                        onPressIn={animateDay}
                        onPressOut={resetDay}
                        style={styles.inputButton}
                     >
                        <Text style={{ color: "white" }}>Day</Text>
                     </Pressable>
                  </Animated.View>
                  <Animated.View style={[{ transform: [{ scale: scaleM }] }]}>
                     <Pressable
                        onPress={() => handleRminderSellect("month")}
                        onPressIn={animateMonth}
                        onPressOut={resetMonth}
                        style={styles.inputButton}
                     >
                        <Text style={{ color: "white" }}>Month</Text>
                     </Pressable>
                  </Animated.View>
                  <Animated.View style={[{ transform: [{ scale: scaleY }] }]}>
                     <Pressable
                        onPress={() => handleRminderSellect("year")}
                        onPressIn={animateYear}
                        onPressOut={resetYear}
                        style={styles.inputButton}
                     >
                        <Text style={{ color: "white" }}>Year</Text>
                     </Pressable>
                  </Animated.View>
               </View>
            </KeyboardAvoidingView>
         </ButtonSheet>
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
   input: {
      color: "white",
      padding: 10,
      backgroundColor: "#b3b3b3",
      borderRadius: 10,
   },
   inputButton: {
      backgroundColor: Colors.light.accent,
      width: "100%",
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      borderRadius: 10,
   },
   checkBoxContainer: {
      flexDirection: "row",
   },
});
