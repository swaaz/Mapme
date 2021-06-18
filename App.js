import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/drawer';
import { HistoryProvider } from './Context/HistoryContext';
export default function App() {
  return (
    <HistoryProvider>
      <Navigator />
    </HistoryProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
