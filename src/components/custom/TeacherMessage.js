import React from 'react';
import { View } from 'react-native';
import { Text, Button } from '../ui';

export default function TeacherMessage() {
  return (
    <View style={{ alignItems: 'center', padding: 20 }}>
      <Text> Message from your Teacher </Text>
      <Text>“Do Azkaar daily”</Text>
      <Button title="Thank you!" onPress={() => alert('You’re welcome 😊')} />
    </View>
  );
}
