import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

var width = Dimensions.get('window').width; 


const LoyaltyTask = ({item,setToDoToDone, incrementLoyaltyPoints}) => {


  const [image, setImage] = useState(null);

  const pickImage = async (item) => {
    if(item.done){
      return
    }
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    
    if (!result.canceled) {
      setToDoToDone(item.id);
      incrementLoyaltyPoints(10);
      setImage(result.assets[0].uri);
    }
  };


  return (
    <TouchableOpacity style={styles.container} onPress={()=>pickImage(item)}>
      <View style={styles.leftComponent}>
        <View style={item.done? styles.profileIconDone : styles.profileIcon}><MaterialCommunityIcons name="camera-plus-outline" color={"white"} size={60} /></View>
      </View>
      <View style={styles.rightComponent}>
      <Text>{item.text}</Text>
      <Text style={{color: "#484848"}}>Upload Picture to get points</Text>
      </View>
    </TouchableOpacity>

  );
}

export default LoyaltyTask;

const styles = StyleSheet.create({
  profileIcon:{
    width: 90,
    height:90,
    backgroundColor: 'red',
    borderRadius: '50%',
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius:100,
  },
  profileIconDone:{
    width: 90,
    height:90,
    backgroundColor: 'green',
    borderRadius: '50%',
    justifyContent:'center',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius:100,
  },
  container: {
    height: 120,
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
    paddingRight:10,

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
