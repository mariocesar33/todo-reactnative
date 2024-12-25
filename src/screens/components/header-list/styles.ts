import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 26,
    borderBottomWidth: 2,
    borderColor: '#262626',
    paddingBottom: 15,
  },
  box: {
    flexDirection: 'row',
    rowGap: 10,
    alignItems: 'center',
  },
  textOne: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4EA8DE',
  },
  boxIcon: {
    backgroundColor: '#333',
    width: 25,
    height: 25,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  iconText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  textTwo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#8284FA',
  },
});