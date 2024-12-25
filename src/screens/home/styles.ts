import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1A1A',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 26,
    width: '100%',
    transform: [{ translateY: -30 }],
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    color: '#FFF',
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 16,
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#1E6F9F',
    height: 54,
    width: 54,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    
  },
  icon: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});