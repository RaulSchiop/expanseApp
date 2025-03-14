import { useEffect } from "react";
import { ReactNode } from "react";
import { useRef } from "react";

import { StyleSheet, Animated, TouchableWithoutFeedback } from "react-native";

type ButtonSheetType = {
   show: boolean;
   onClose: () => void;
   children: ReactNode;
   height?: `${number}%` | number;
};

export default function ButtonSheet({
   show,
   onClose,
   children,
   height = "50%",
}: ButtonSheetType) {
   const opacityB = new Animated.Value(0);
   const translateY = new Animated.Value(300);

   useEffect(() => {
      if (show) {
         Animated.parallel([
            Animated.timing(opacityB, {
               toValue: 1,
               duration: 500,
               useNativeDriver: true,
            }),
            Animated.timing(translateY, {
               toValue: 0,
               duration: 500,
               useNativeDriver: true,
            }),
         ]).start();
      } else {
         Animated.parallel([
            Animated.timing(opacityB, {
               toValue: 0,
               duration: 500,
               useNativeDriver: true,
            }),
            Animated.timing(translateY, {
               toValue: 300,
               duration: 500,
               useNativeDriver: true,
            }),
         ]).start();
      }
   }, [show]);

   if (!show) return null;
   return (
      <TouchableWithoutFeedback onPress={onClose}>
         <Animated.View style={[styles.overlay, { opacity: opacityB }]}>
            <TouchableWithoutFeedback>
               <Animated.View
                  style={[
                     styles.sheet,
                     { transform: [{ translateY }], height: height },
                  ]}
               >
                  {children}
               </Animated.View>
            </TouchableWithoutFeedback>
         </Animated.View>
      </TouchableWithoutFeedback>
   );
}
const styles = StyleSheet.create({
   overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      justifyContent: "flex-end",
   },
   sheet: {
      backgroundColor: "white",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
   },
});
