import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../config/firebaseConnection';

import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  const [contatos, setContatos] = useState([{ 'Nome': String, 'Email': String, 'Telefone': String }])

  useEffect(() => {
    firebase.database().ref('contatos').on('value', (snapshot) => {
      setContatos(snapshot.val());
    });
  }, []);

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

      <ScrollView style={styles.contatosContainer}>
        {contatos.map(contato => {
          return (
            <View style={styles.contatoCard}>
              <View style={{ flex: 1, paddingRight: 4 }}>
                <Text style={styles.nome} numberOfLines={1}>
                  {contato.Nome}
                </Text>
                <Text style={styles.telefone} numberOfLines={1}>
                  {contato.Telefone}
                </Text>
                <Text style={styles.email} numberOfLines={1}>
                  {contato.Email}
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
          );
        })}
      </ScrollView>

      <RectButton style={styles.fab} onPress={() => navigation.navigate('FormContact')}>
        <Icon name="plus" size={28} color="#f9f9f9" />
      </RectButton>
    </SafeAreaView>
  );
};

export default Home;
