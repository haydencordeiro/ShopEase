import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import LoyaltyTask from '../components/LoyaltyTask'

const LoyaltyPoints = () => {
  
  const data = [
    { id: '1', color: 'red', text: 'Item 1' },
    { id: '2', color: 'green', text: 'Item 2' },
    { id: '3', color: 'blue', text: 'Item 3' },
    { id: '4', color: 'orange', text: 'Item 4' },
    { id: '5', color: 'purple', text: 'Item 5' },
    { id: '6', color: 'pink', text: 'Item 6' },
    { id: '7', color: 'yellow', text: 'Item 7' },
    { id: '8', color: 'brown', text: 'Item 8' },
    { id: '9', color: 'cyan', text: 'Item 9' },
    { id: '10', color: 'magenta', text: 'Item 10' },
    { id: '11', color: 'teal', text: 'Item 11' },
    { id: '12', color: 'indigo', text: 'Item 12' },
    { id: '13', color: 'maroon', text: 'Item 13' },
    { id: '14', color: 'lime', text: 'Item 14' },
    { id: '15', color: 'gold', text: 'Item 15' },
    { id: '16', color: 'silver', text: 'Item 16' },
    { id: '17', color: 'gray', text: 'Item 17' },
    { id: '18', color: 'olive', text: 'Item 18' },
    { id: '19', color: 'navy', text: 'Item 19' },
    { id: '20', color: 'coral', text: 'Item 20' },
    { id: '21', color: 'cyan', text: 'Item 21' },
    { id: '22', color: 'violet', text: 'Item 22' },
    { id: '23', color: 'salmon', text: 'Item 23' },
    { id: '24', color: 'tomato', text: 'Item 24' },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <LoyaltyTask/>
  );

  return (
    <View style={styles.container}>
      <View style={styles.totalPointsContainer}>
      <Text style={styles.tpTitleText}>Your Loyalty Points</Text>
      <Text style={styles.tpSubTitleText}>1000</Text>
      </View>
      
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={1} // Number of columns in the grid
      styles={styles.containerFlatList}
    />
      <StatusBar style="auto" />
    </View>

  );
}

export default LoyaltyPoints;

const styles = StyleSheet.create({
  containerFlatList:{
    backgroundColor: 'violet'

  },
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
    alignItems: 'center',
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
