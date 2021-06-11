import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  form: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#e9e9e9',
  },
  inputContainer: {
    width: '100%',
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#a8a8a8',
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 8,
    marginBottom: 4,

    fontSize: 18,
    fontStyle: 'normal',
    color: '#d9d9d9',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F9A826',
    padding: 16,
    borderRadius: 8,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontStyle: 'normal',
    color: '#d9d9d9',
  }
})

export default styles;
