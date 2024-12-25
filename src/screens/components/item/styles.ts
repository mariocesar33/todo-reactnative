import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginHorizontal: 26,
    borderRadius: 8,
    backgroundColor: '#333',
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    height: 18,
    width: 18,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  checkboxUnchecked: {
    borderWidth: 2,
    borderColor: '#1E6F9F',
  },
  checkboxChecked: {
    borderWidth: 2,
    borderColor: '#5E60CE',
    backgroundColor: '#5E60CE',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    color: '#FFF',
  },
  paragraphChecked: {
    textDecorationLine: 'line-through',
    color: '#AAA',
  },
  removeButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: 'transparent',
  },
  removeButtonHover: {
    backgroundColor: '#444',
  },
});