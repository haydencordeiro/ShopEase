import { StatusBar } from 'expo-status-bar';
import {Modal , StyleSheet, Text, View,SafeAreaView, FlatList , Button, ScrollView} from 'react-native';
import ReccomendationComponent from '../components/ReccomendationComponent'
import {Platform} from 'react-native';
import React, { useState, useEffect } from 'react';
import ProductModal from '../components/ProductModal';

const isWeb = Platform.OS === 'web';
const numColumns = isWeb ? 4 : 2;

const HomeScreen = () => {

    const [data, setData] = useState([

      ]);

      const [modalVisible, setModalVisible] = useState(false);
      const [selectedProduct, setSelectedProduct] = useState(null);



      async function fetchData(){
        try {
          const response = await fetch('http://shopease.hayden.co.in:8080/recommendation/?text="blue shirt men"',{
            method: 'POST'});
          const json = await response.json();
          console.log(json);
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
        <ReccomendationComponent item = {item} setModalVisible={setModalVisible} setSelectedProduct={setSelectedProduct}/>
      );

  return (
    
    <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
    <Modal visible={modalVisible}>
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
        <ProductModal setModalVisible={setModalVisible} item={selectedProduct}></ProductModal>
      </SafeAreaView>
    </Modal>    
    <SafeAreaView  style={{
      marginHorizontal:10,
      marginBottom:65,
      borderRadius:100,
      backgroundColor: 'rgba(52, 52, 52, alpha)'

    }}>
   
        <FlatList
          data={data}
          keyExtractor={(item) => item.productId}
          renderItem={renderItem}
          numColumns={numColumns}
          styles={styles.container}
        />

    </SafeAreaView>
    
  </SafeAreaView>
  


  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
});
