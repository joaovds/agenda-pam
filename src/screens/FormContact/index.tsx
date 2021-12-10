import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import firebase from '../../config/firebaseConnection';

import styles from './styles';

const FormContact: React.FC = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleCreate = async () => {
    if (nome !== '' && email !== '' && telefone !== '') {
      let contatos = firebase.database().ref('contatos');
      const id = contatos.push().key;

      console.log(id)

      await contatos.child(String(id)).set({
        Nome: nome,
        Email: email,
        Telefone: telefone
      });

      alert('Novo contato cadastrado!');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <RectButton onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={32} color="#404040" />
            </RectButton>
          </View>

          <View style={styles.form}>
            <Text style={styles.title}>Novo contato</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#333333"
                value={nome}
                onChangeText={text => setNome(text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#333333"
                value={email}
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Telefone</Text>
              <TextInput
                keyboardType="phone-pad"
                style={styles.input}
                placeholderTextColor="#333333"
                value={telefone}
                onChangeText={text => setTelefone(text)}
              />
            </View>

            <RectButton style={styles.button} onPress={handleCreate}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </RectButton>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormContact;
