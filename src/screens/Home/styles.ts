import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: Constants.statusBarHeight
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontStyle: 'normal',
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#e9e9e9'
  },
  pessoasContainer: {
    flex: 1,
    width: '100%',
  },
  pessoaCard: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    marginVertical: 8,
    padding: 12,
    flexDirection: 'row',
  },
  nome: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#8f8f8f',
  },
  curso: {
    marginTop:4,
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#4d4d4d'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 100
  },
  buttonAction: {
    marginHorizontal: 8,
    padding: 12,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
