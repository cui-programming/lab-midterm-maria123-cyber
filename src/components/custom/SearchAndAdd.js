import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button, Text } from '../ui';
import { styles } from '../../styles/styles';

/**
 * SearchAndAdd Component
 * - Allows user to type a phrase to search or add
 * - Calls onSearch and onAdd from parent (App.js)
 */
export default function SearchAndAdd({ onSearch = () => {}, onAdd = () => {} }) {
  const [text, setText] = useState('');

  const handleSearch = () => {
    onSearch(text);
  };

  const handleAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setText(''); // clear after adding
  };

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search or Add New Zikr</Text>

      {/* Input Field */}
      <TextInput
        placeholder="Type zikr phrase..."
        value={text}
        onChangeText={setText}
        style={styles.input}
      />

      {/* Buttons Row */}
      <View style={styles.buttonRow}>
        <Button onPress={handleSearch}>Search</Button>
        <Button onPress={handleAdd}>Add</Button>
      </View>
    </View>
  );
}
