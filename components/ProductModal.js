import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity,Button,ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'expo-image';
import {Platform} from 'react-native';
import CustomerComments from './CustomerComments';
const isWeb = Platform.OS === 'web';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

var width = Dimensions.get('window').width; 


const ProductModal = ({ item, setModalVisible}) => {
  const navigation = useNavigation();




  return (
    <View style={styles.container} onPress={()=>{}}>
          <View style={isWeb ? styles.containerWeb: styles.containerAndroid}>
      <View style={styles.imageContainer}>      
      <Image
        style={styles.image}
        source={item.productImageUrl}
        placeholder={blurhash}
        contentFit="contain"
        transition={1000}
      /></View>
      <View style={styles.dataContainer}>
        <Text style={styles.titleText}>{item.productName}</Text>
        {/* <Text style={styles.subtitleText}>{item.productDescription}</Text> */}
        <Text style={styles.priceText}>${item.productPrice}</Text>
        <Text style={styles.subtitleText}> Aisle Number 10</Text>
        </View>
        <Text style={{marginTop:6,fontSize:16}}>Comments:</Text>
        {/* <ScrollView> */}
        <CustomerComments></CustomerComments>
        <CustomerComments></CustomerComments>
        {/* </ScrollView> */}
      <Button title='Hide' onPress={()=>setModalVisible(false)}></Button>
    </View>
      

    </View>

  );
}

export default ProductModal;

const styles = StyleSheet.create({
  titleText:{
    fontSize: 16,
    marginBottom:2,
    fontWeight: 'bold',
    color: '#333749',
  },
  subtitleText:{
    marginBottom:2,
    fontSize: 15,
    color: '#CDCED2',
  },
  priceText:{

    fontSize: 16,
    fontWeight: 'bold',
    color: '#333749',
  },
  image: {
    flex: 1,
    width: '100%',
  },
  imageContainer:{
    height: 470,
    backgroundColor: 'white'
  },
  dataContainer:{
    marginLeft:10,
    height: 85,
    backgroundColor: '#FFFFFF'
  },
  containerAndroid: {
    backgroundColor: 'black',
    padding: 1,
    backgroundColor:'#FFFFFF',
    flexBasis: '50%'
  },
  containerWeb: {
    backgroundColor: 'black',
    padding: 1,
    backgroundColor:'#FFFFFF',
    flexBasis: '25%'
  },
});
