import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import LoyaltyTask from '../components/LoyaltyTask'
import React, { useState, useEffect } from 'react';

const LoyaltyPoints = () => {
  const [data, setData] = useState([
    { id: '1', color: 'red', text: 'Task 1' },
    { id: '2', color: 'green', text: 'Task 2' },
    { id: '3', color: 'blue', text: 'Task 3' },
    { id: '4', color: 'orange', text: 'Task 4' },
    { id: '5', color: 'purple', text: 'Task 5' },
    { id: '6', color: 'pink', text: 'Task 6' },
    { id: '7', color: 'yellow', text: 'Task 7' },
    { id: '8', color: 'brown', text: 'Task 8' },
    { id: '9', color: 'cyan', text: 'Task 9' },
    { id: '10', color: 'magenta', text: 'Task 10' },
    { id: '11', color: 'teal', text: 'Task 11' },
    { id: '12', color: 'indigo', text: 'Task 12' },
    { id: '13', color: 'maroon', text: 'Task 13' },
    { id: '14', color: 'lime', text: 'Task 14' },
    { id: '15', color: 'gold', text: 'Task 15' },
    { id: '16', color: 'silver', text: 'Task 16' },
    { id: '17', color: 'gray', text: 'Task 17' },
    { id: '18', color: 'olive', text: 'Task 18' },
    { id: '19', color: 'navy', text: 'Task 19' },
    { id: '20', color: 'coral', text: 'Task 20' },
    { id: '21', color: 'cyan', text: 'Task 21' },
    { id: '22', color: 'violet', text: 'Task 22' },
    { id: '23', color: 'salmon', text: 'Task 23' },
    { id: '24', color: 'tomato', text: 'Task 24' },
    // Add more items as needed
  ]);
  const [loyaltyPoints, setLoyaltyPoints] = useState(0)
  function setToDoToDone(item){
    let temp = data[item - 1];
    temp.done = "test";
    // temp.push("done","Test");
  }

  function incrementLoyaltyPoints(value){
    setLoyaltyPoints(loyaltyPoints + value);
  }
  const renderItem = ({ item }) => (
    <LoyaltyTask item={item} setToDoToDone={setToDoToDone} incrementLoyaltyPoints={incrementLoyaltyPoints}/>
  );

  return (
    <View style={styles.container}>
      <View style={styles.totalPointsContainer} >
      <Text style={styles.tpTitleText}>Your Loyalty Points</Text>
      <Text style={styles.tpSubTitleText}>{loyaltyPoints}</Text>
      </View>
      
    <FlatList
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    
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

  },
  totalPointsContainer:{
    height: 120,
    width: '100%',
    backgroundColor: '#FAFAFA',
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    alignItems: 'center',
    marginBottom: 0,
    elevation: 20,
    shadowColor: '#52006A',
  },
  container: {
    width: '100%',
    alignItems: 'center',
    flex:1,
  },
  tpTitleText:{
    color: "#1D1D1D",
    fontSize: 16,
    fontWeight: 'bold'
  },
  tpSubTitleText:{
    color: "#1D1D1D",
    fontSize: 40,

  }
});
