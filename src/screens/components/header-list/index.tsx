import { Text, View } from "react-native";
import { styles } from "./styles";

interface Props {
  tasksCounter: number
  checkedTasksCounter: number
}

export function HeaderList({ tasksCounter, checkedTasksCounter }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textOne}>Criadas</Text>
        <View style={styles.boxIcon}>
          <Text style={styles.iconText}>{tasksCounter}</Text>
        </View>
      </View>

      <View style={styles.box}>
        <Text style={styles.textTwo}>Concluídas</Text>
        <View style={styles.boxIcon}>
          <Text style={styles.iconText}>
            {tasksCounter === 0 ? tasksCounter : `${checkedTasksCounter}`}
          </Text>
        </View>
      </View>
      
    </View>
  )
}