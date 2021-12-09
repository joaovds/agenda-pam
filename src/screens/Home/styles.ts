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
    marginBottom: 16,
    color: '#e9e9e9'
  },

  contatosContainer: {
    flex: 1,
    width: '100%',
  },

  contatoCard: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    marginVertical: 8,
    padding: 12,

    flexDirection: 'row',
    alignItems: 'center'
  },

  nome: {
    fontSize: 16,
    lineHeight: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    color: '#a8a8a8',
  },

  telefone: {
    marginTop: 4,
    fontSize: 16,
    lineHeight: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#8f8f8f'
  },

  email: {
    marginTop: 4,
    fontSize: 14,
    lineHeight: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#8f8f8f'
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
    backgroundColor: '#1f1f1f',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fab: {
    position: 'absolute',
    right: 20,
    bottom: 24,
    width: 64,
    height: 64,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 1000,
    backgroundColor: '#1e3e95',
  }
});

export default styles;
