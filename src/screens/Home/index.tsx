import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const pessoasFake = [
  {
    id: 1,
    nome: 'Nome Qualquer 1 Nome Qualquer 1 Nome Qualquer 1',
    curso: 'Nome de um curso Nome de um curso',
  },
  {
    id: 2,
    nome: 'Nome Qualquer 2',
    curso: 'Nome de um curso',
  },
  {
    id: 3,
    nome: 'Nome Qualquer 3',
    curso: 'Nome de um curso',
  },
  {
    id: 4,
    nome: 'Nome Qualquer 4',
    curso: 'Nome de um curso',
  },
  {
    id: 5,
    nome: 'Nome Qualquer 5',
    curso: 'Nome de um curso',
  },
  {
    id: 6,
    nome: 'Nome Qualquer 6',
    curso: 'Nome de um curso',
  },
  {
    id: 7,
    nome: 'Nome Qualquer 7',
    curso: 'Nome de um curso',
  },
  {
    id: 8,
    nome: 'Nome Qualquer 8',
    curso: 'Nome de um curso',
  },
  {
    id: 9,
    nome: 'Nome Qualquer 9',
    curso: 'Nome de um curso',
  },
];

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Pessoas cadastradas</Text>
      </View>

      <View style={styles.pessoasContainer}>
        <FlatList
          data={pessoasFake}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.pessoaCard}>
              <View style={{ flex: 1, paddingRight: 4 }}>
                <Text style={styles.nome} numberOfLines={1}>
                  {item.nome}
                </Text>
                <Text style={styles.curso} numberOfLines={1}>
                  {item.curso}
                </Text>
              </View>
              <View style={styles.actions}>
                <RectButton style={styles.buttonAction}>
                  <Feather name="edit" size={20} color="#404040" />
                </RectButton>

                <RectButton style={styles.buttonAction}>
                  <Feather name="delete" size={20} color="#793636" />
                </RectButton>
              </View>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
