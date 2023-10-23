import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const LoyaltyPoints = () => {
  return (
    <View style={styles.container}>
      <Text>LoyaltyPoints</Text>
      <StatusBar style="auto" />
    </View>

  );
}

export default LoyaltyPoints;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
