import { StatusBar } from 'expo-status-bar';
import {ScrollView , StyleSheet, Text, View,SafeAreaView, FlatList } from 'react-native';
import ReccomendationComponent from '../components/ReccomendationComponent'
import {Platform} from 'react-native';
import React, { useState, useEffect } from 'react';

const isWeb = Platform.OS === 'web';
const numColumns = isWeb ? 4 : 2;

const HomeScreen = () => {

    const [data, setData] = useState([

      ]);

      async function fetchData(){
        try {
          const response = await fetch('https://shop-ease-nzbi.onrender.com/');
          const json = await response.json();
          // console.log(json.data);
          setData(json.data);
        } catch (error) {
          console.error(error);
        } finally {
          // setLoading(false);
        }
      }
      useEffect(() => {
        fetchData();
      }, []);

      const renderItem = ({ item }) => (
        <ReccomendationComponent item = {item}/>
      );
  return (

    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>

    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={numColumns}
      styles={styles.container}
    />
  </SafeAreaView>

  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
