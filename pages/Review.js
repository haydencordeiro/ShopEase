import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Review = () => {
  return (
    <View style={styles.container}>
      <Text>Reviews</Text>
      <StatusBar style="auto" />
    </View>

  );
}

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
