import React from 'react';
import {
  View,
  Text,
  FlatList,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const contatosFake = [
  {
    id: 1,
    nome: 'João Victor',
    email: 'joao@email.com',
    telefone: '998263749'
  },
  {
    id: 2,
    nome: 'Nome Qualquer 2',
    email: 'email@email.com',
    telefone: '998263749'
  },
  {
    id: 3,
    nome: 'Nome Qualquer 3',
    email: 'email@email.com',
    telefone: '998263749'
  },
  {
    id: 4,
    nome: 'Nome Qualquer 4',
    email: 'email@email.com',
    telefone: '998263749'
  },
  {
    id: 5,
    nome: 'Nome Qualquer 5',
    email: 'email@email.com',
    telefone: '998263749'
  },
  {
    id: 6,
    nome: 'Nome Qualquer 6',
    email: 'email@email.com',
    telefone: '998263749'
  },
  {
    id: 7,
    nome: 'Nome Qualquer 7',
    email: 'email@email.com',
    telefone: '998263749'
  },
  {
    id: 8,
    nome: 'Nome Qualquer 8',
    email: 'email@email.com',
    telefone: '998263749'
  },
  {
    id: 9,
    nome: 'Nome Qualquer 9',
    email: 'email@email.com',
    telefone: '998263749'
  },
];

const Home: React.FC = () => {
  const navigation = useNavigation();

  const handleDelete = () => {
    Alert.alert(
      'Confirmação',
      'Deseja mesmo deletar este contato?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
          onPress: () => console.log('cancelado'),
        },
        {
          text: 'Sim',
          onPress: () => console.log('sim'),
        },
      ],
      { cancelable: false },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Contatos</Text>
      </View>

      <View style={styles.contatosContainer}>
        <FlatList
          data={contatosFake}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.contatoCard}>
              <View style={{ flex: 1, paddingRight: 4 }}>
                <Text style={styles.nome} numberOfLines={1}>
                  {item.nome}
                </Text>
                <Text style={styles.telefone} numberOfLines={1}>
                  {item.telefone}
                </Text>
                <Text style={styles.email} numberOfLines={1}>
                  {item.email}
                </Text>
              </View>

              <View style={styles.actions}>
                <RectButton style={styles.buttonAction}>
                  <Icon name="edit" size={20} color="#4d4d4d" />
                </RectButton>

                <RectButton
                  style={styles.buttonAction}
                  onPress={() => handleDelete()}
                >
                  <Icon name="delete" size={20} color="#8f4040" />
                </RectButton>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <RectButton style={styles.fab} onPress={() => navigation.navigate('FormContact')}>
        <Icon name="plus" size={28} color="#f9f9f9" />
      </RectButton>
    </SafeAreaView>
  );
};

export default Home;
