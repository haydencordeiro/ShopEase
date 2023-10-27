import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

var width = Dimensions.get('window').width; 


const CustomerComments = ({ item, setToDoToDone, incrementLoyaltyPoints}) => {


  return (
    <View style={styles.container}>
      <View style={styles.leftComponent}>
        <View style={item? styles.profileIconDone : styles.profileIcon}><MaterialCommunityIcons name="account" color={"white"} size={20} /></View>
      </View>
      <View style={styles.rightComponent}>
      <Text>Anonymous User</Text>
      <Text style={{color: "#484848"}}>This product was very good. I purchased it a month back and I'm loving it.</Text>
      </View>
    </View>

  );
}

export default CustomerComments;

const styles = StyleSheet.create({
  profileIcon:{
    width: 30,
    height:30,
    backgroundColor: '#2191fb',
    borderRadius: '50%',
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius:100,
  },
  profileIconDone:{
    width: 30,
    height:30,
    backgroundColor: 'green',
    borderRadius: '50%',
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius:100,
  },
  container: {
    height: 50,
    width: Number(width * 0.9),
    flexDirection:'row',
    margin:5,
    borderRadius:5,
    alignItems: 'center',
    marginBottom:20,
  },
  leftComponent:{
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    backgroundColor: '#FAFAFA',
    height: '100%',
    justifyContent:'center',

  },

  rightComponent:{
    paddingLeft:10,
    flexGrow:1,
    justifyContent:'center',
    backgroundColor: '#FAFAFA',
    height: '100%',
    borderBottomEndRadius:10,
    borderTopEndRadius:10,
  }
});
