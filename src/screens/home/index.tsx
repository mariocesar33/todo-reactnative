import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../components/header";
import { styles } from "./styles";
import { HeaderList } from "../components/header-list";
import { Item } from "../components/item";
import { Empty } from "../components/empty";

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function Home() {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const [tasks, setTasks] = useState<ITask[]>([])

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    Alert.alert(
      'Remover tarefa', 
      `Deseja mesmo apagar essa tarefa?`,
      [
        {
          text: 'Sim',
          onPress: () => setTasks(filteredTasks),
        },
        {
          text: 'Não',
          style: 'cancel',
        }
      ],
    );
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            { borderColor: isFocused ? '#5E60CE' : '#0D0D0D' } // Cor condicional
          ]}
          onFocus={() => setIsFocused(true)} // Define como true ao focar
          onBlur={() => setIsFocused(false)} // Retorna para false ao sair do foco
          placeholder='Adicione uma nova tarea'
          placeholderTextColor='#808080'
          onChangeText={eventText => setInputValue(eventText)}
          value={inputValue}
        />

        <TouchableOpacity style={styles.button}>
          <Text 
            style={styles.icon}
            onPress={handleAddTask}
          >
            +
          </Text>
        </TouchableOpacity>
      </View>

      <HeaderList 
        tasksCounter={tasks.length} 
        checkedTasksCounter={checkedTasksCounter}
      />

      <FlatList
        data={tasks}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Item 
            data={item} 
            removeTask={handleRemoveTask}
            toggleTaskStatus={handleToggleTask}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Empty />
        )}
      />
    </View>
  )
}