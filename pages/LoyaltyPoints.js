import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const LoyaltyPoints = () => {
  return (
    <View style={styles.container}>
      <View style={styles.totalPointsContainer}>
      <Text style={styles.tpTitleText}>Your Loyalty Points</Text>
      <Text style={styles.tpSubTitleText}>1000</Text>

      </View>
      <StatusBar style="auto" />
    </View>

  );
}

export default LoyaltyPoints;

const styles = StyleSheet.create({
  totalPointsContainer:{
    height: 120,
    width: '90%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    alignItems: 'center'
  },
  container: {
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  tpTitleText:{
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold'
  },
  tpSubTitleText:{
    color: "#fff",
    fontSize: 40,

  }
});
