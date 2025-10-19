import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './src/styles/styles';
import AboutMe from './src/components/custom/AboutMe';
import TasbihList from './src/components/custom/TasbihList';
import TeacherMessage from './src/components/custom/TeacherMessage';
import SearchAndAdd from './src/components/custom/SearchAndAdd';
import { STUDENT_NAME, REG_NO } from './src/config/student';
import { initialAzkaar } from './src/data/azkaar';

export default function App() {
 
  const [items, setItems] = useState(initialAzkaar);
  const [searchQuery, setSearchQuery] = useState('');

  // increment/decrement handlers 
  const increment = (id) => {
    setItems(prev => prev.map(it => it.id === id ? { ...it, count: it.count + 1 } : it));
  };

  const decrement = (id) => {
    setItems(prev => prev.map(it => (it.id === id && it.count > 0) ? { ...it, count: it.count - 1 } : it));
  };

  // onAdd: add only if phrase not present (case-insensitive)
  const onAdd = (phrase) => {
    if (!phrase || !phrase.trim()) return;
    const normalized = phrase.trim().toLowerCase();
    const exists = items.some(it => it.phrase.toLowerCase() === normalized);
    if (exists) return;
    const newItem = { id: Date.now().toString(), phrase: phrase.trim(), count: 0 };
    setItems(prev => [newItem, ...prev]);
  };

  // filtered items for TasbihList
  const filteredItems = items.filter(it =>
    it.phrase.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AboutMe name={STUDENT_NAME} regNo={REG_NO} />
      <TeacherMessage />
      <SearchAndAdd
        onSearch={(q) => setSearchQuery(q || '')}
        onAdd={onAdd}
      />
      <TasbihList
        items={filteredItems}
        onIncrement={increment}
        onDecrement={decrement}
      />
    </ScrollView>
  );
}
