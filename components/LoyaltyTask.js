import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const LoyaltyTask = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftComponent}>
       <Text>Left</Text>
      </View>
      <View style={styles.rightComponent}>
      <Text>Right</Text>
      </View>
    </View>

  );
}

export default LoyaltyTask;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    backgroundColor: 'yellow',
    justifyContent: 'space-around',
    height: 40,
    flexDirection:'row',
    backgroundColor: 'violet'
  },
  leftComponent:{

  },
  rightComponent:{
    
  }
});
