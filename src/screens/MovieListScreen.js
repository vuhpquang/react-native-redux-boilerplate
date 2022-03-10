import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const MovieListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MovieListScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MovieListScreen;
