import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import { ReactNode, useEffect } from "react";
import { transform } from "@babel/core";

export default function IconsCategory({
   title,
   children,
   bgColor,
}: {
   title: string;
   children: ReactNode;
   bgColor: string;
}) {

    const scale=new Animated.Value(1);

   return (
      <Animated.View style={styles.outherCont}>
         <Pressable style={[styles.container, { backgroundColor: bgColor }]}>
            {children}
         </Pressable>
         <Text style={{ textAlign: "center" }}>{title}</Text>
      </Animated.View>
   );
}

const styles = StyleSheet.create({
   container: {
      width: 50,
      height: 50,
      borderRadius: 100,
      alignItems: "center",
      justifyContent: "center",
   },
   outherCont: {
      width: 70,
      height: 40,
      rowGap: 10,
      alignItems: "center",
      justifyContent: "center",
   },
});
