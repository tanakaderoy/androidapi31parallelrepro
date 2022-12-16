/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import AppTestID from './AppTestID';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(prev => prev + 1), []);
  const decrement = useCallback(() => setCount(prev => prev - 1), []);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text} testID={AppTestID.countLabel}>
        {count}
      </Text>
      <Button
        testID={AppTestID.incrementButton}
        onPress={increment}
        title="Increment"
      />
      <Button
        testID={AppTestID.decrementButton}
        onPress={decrement}
        title="Decrement"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  text: {
    color: 'black',
    fontSize: 36,
    textAlign: 'center',
  },
});

export default App;
