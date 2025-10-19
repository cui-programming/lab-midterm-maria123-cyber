import React from 'react';
import { View, FlatList } from 'react-native';
import { Text, Button } from '../ui';
import { styles } from '../../styles/styles';

/**
 * TasbihList (presentational)
 * Props:
 *  - items: array of {id, phrase, count}
 *  - onIncrement(id)
 *  - onDecrement(id)
 */
export default function TasbihList({ items = [], onIncrement = () => {}, onDecrement = () => {} }) {

  const renderItem = ({ item }) => (
    <View style={styles.itemRow}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.counter}>{item.count}</Text>

      <View style={styles.buttonRow}>
        <Button onPress={() => onIncrement(item.id)}>+</Button>
        <Button onPress={() => onDecrement(item.id)}>−</Button>
      </View>
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
      />
    </View>
  );
}
