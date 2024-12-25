import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/logo.png")} />
    </View>
  )
}