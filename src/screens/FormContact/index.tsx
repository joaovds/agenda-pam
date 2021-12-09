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

import styles from './styles';

const FormContact: React.FC = () => {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

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
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Telefone</Text>
              <TextInput
                style={styles.input}
                placeholderTextColor="#333333"
                value={telefone}
                onChangeText={text => setTelefone(text)}
              />
            </View>

            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </RectButton>
          </View>
        </SafeAreaView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormContact;
