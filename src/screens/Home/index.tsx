import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Home: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#f9f9f9' }}>Home</Text>
    </View>
  );
};

export default Home;
