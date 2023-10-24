import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState, useEffect } from 'react';

var width = Dimensions.get('window').width; 


const LoyaltyTask = ({item,setToDoToDone}) => {


  const [image, setImage] = useState(null);

  const pickImage = async (item) => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    
    if (!result.canceled) {
      setToDoToDone(item);
      setImage(result.assets[0].uri);
    }
  };


  return (
    <TouchableOpacity style={styles.container} onPress={()=>pickImage(item.id)}>
      <View style={item.done? styles.leftComponentDone : styles.leftComponent}>
        <View style={styles.profileIcon}><Text>T</Text></View>
      </View>
      <View style={styles.rightComponent}>
      <Text>{item.text}</Text>
      <Text>Upload Picture to get points</Text>
      </View>
    </TouchableOpacity>

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
    backgroundColor: 'pink',
    height: '100%',
    justifyContent:'center',
    paddingRight:10

  },
  leftComponentDone:{
    backgroundColor: 'green',
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
    borderBottomEndRadius:10,
    borderTopEndRadius:10,

  }
});
