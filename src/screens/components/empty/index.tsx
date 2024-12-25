import { Image, Text, View } from "react-native";
import { styles } from "./styles";

export function Empty() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/clipboard.png")} />
      <Text style={styles.description}>
        <Text style={{ fontWeight: 'bold'}}>
          Você ainda não tem tarefas cadastradas
        </Text>{"\n"}
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}