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
