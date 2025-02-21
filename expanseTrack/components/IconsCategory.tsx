import { View, Text, StyleSheet } from "react-native";
import { ReactNode } from "react";
export default function IconsCategory({
   title,
   children,
   bgColor,
}: {
   title: string;
   children: ReactNode;
   bgColor: string;
}) {
   return (
      <View
         style={{
            width: 70,
            height: 40,
            rowGap:10,
            alignItems: "center",
            justifyContent: "center",
            
         }}
      >
         <View style={[styles.container, { backgroundColor: bgColor }]}>
            {children}
         </View>
         <Text style={{textAlign:'center'}}>{title}</Text>
      </View>
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
});
