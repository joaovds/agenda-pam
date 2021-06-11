import React from 'react';
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

const FormPeople: React.FC = () => {
  const navigation = useNavigation();

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
            <Text style={styles.title}>Cadastrar Pessoa</Text>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Nome</Text>
              <TextInput
                style={styles.input}
                placeholder="Nome da pessoa"
                placeholderTextColor="#333333"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Curso</Text>
              <TextInput
                style={styles.input}
                placeholder="Curso da pessoa"
                placeholderTextColor="#333333"
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

export default FormPeople;
