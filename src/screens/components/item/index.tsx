import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import type { ITask } from '../../home';
import { styles } from './styles';

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Item({ data, removeTask, toggleTaskStatus }: Props) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  function handleRemove() {
    removeTask(data.id);
  }

  const checkboxCheckedStyle = data.isChecked
    ? styles.checkboxChecked
    : styles.checkboxUnchecked;
  const paragraphCheckedStyle = data.isChecked
    ? styles.paragraphChecked
    : styles.paragraph;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <TouchableOpacity onPress={handleTaskToggle} style={styles.checkbox}>
          <View style={[styles.checkbox, checkboxCheckedStyle]}>
            {data.isChecked && <Text style={{ color: '#FFF'}}>✓</Text>}
          </View>
        </TouchableOpacity>
        <Text style={[styles.paragraph, paragraphCheckedStyle]}>
          {data.text}
        </Text>
      </View>
      <TouchableOpacity onPress={handleRemove} style={styles.removeButton}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}