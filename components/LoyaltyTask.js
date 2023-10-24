import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
var width = Dimensions.get('window').width; 


const LoyaltyTask = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftComponent}>
        <View style={styles.profileIcon}><Text>T</Text></View>
      </View>
      <View style={styles.rightComponent}>
      <Text>Task 1</Text>
      <Text>Upload Picture to get points</Text>
      </View>
    </View>

  );
}

export default LoyaltyTask;

const styles = StyleSheet.create({
  profileIcon:{
    width: 50,
    height:50,
    // backgroundColor: 'red',
    borderRadius: '50%',
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  container: {
    backgroundColor: 'pink',
    height: 70,
    width: Number(width * 0.85),
    flexDirection:'row',
    margin:5,
    borderRadius:5,
    alignItems: 'center'
  },
  leftComponent:{
    // backgroundColor: 'green',
    height: '100%',
    justifyContent:'center',
    paddingRight:10

  },
  rightComponent:{
    paddingLeft:10,
    flexGrow:1,
    justifyContent:'center',
    backgroundColor: 'violet',
    height: '100%',

  }
});
