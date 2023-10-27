import { useEffect, useRef, useState } from "react"
import { Dimensions, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Video , InterruptionModeAndroid, InterruptionModeIOS, Audio } from 'expo-av';
import {SwiperFlatList} from 'react-native-swiper-flatlist'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

let {height,width } = Dimensions.get('window');
 

export default ShortScreen = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const onBuffer = (e) => {
    //    console.log("buffering ", e)
    }
    const onError = (e) => {
        console.log("Error raised ", e);
    }

    const [like,setLike] = useState(true);

  
    const renderItem = ({item,index})=>{
       // console.log(index)
    
        return(
            <View style={{height:height,width:width}}>
                <Video
                    source={{ uri: item.sources[0] }}
                    shouldPlay={!(currentIndex!==index)}
                    resizeMode="stretch"
                    style={styles.backgroundVideo}
                    controls={true}
                    onLoad={onBuffer}
                    onError={onError}
                    isLooping  
                    play
                    videoStyle={{
                        height:height
                    }} 
                />
                <View style={styles.bottomView}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <EvilIcons name="user" style={styles.profileImgStyle} size={40}  />
                        <Text style={{marginHorizontal:0,color:'white',fontWeight:'bold',paddingTop:8,fontSize:18}}>User</Text>
                    </View>
                    <View style={{flexDirection:'row',marginTop:8,marginHorizontal:5}}>  
                        <Text numberOfLines={1} style={{color:'white',fontWeight:'bold'}}>Feel the beauty of nature</Text>
                    </View>
                </View>
                <View style={styles.rightView}>
                    <TouchableOpacity style={{padding:10}} onPress={()=>setLike(!like)}>
                        <AntDesign name={like? "heart":"hearto"} style={{color:like?'red':'white'}} size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                        <Ionicons name="chatbubble-outline" style={{color:'white'}} size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                        <AntDesign name="sharealt" style={{color:'white'}} size={30}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:10}}>
                        <Entypo name="dots-three-vertical" style={{color:'white'}} size={30}/>
                    </TouchableOpacity>
                </View>
               
                
            </View>
        )
        
    }

    const onChangeIndex = ({index})=>{
        setCurrentIndex(index)
    }
    return (
        <View style={{flex:1,height:height,position:'absolute'}}>
            <StatusBar barStyle="light-content"/>
            <SwiperFlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item,index)=>index.toString()}
                vertical
                onChangeIndex={onChangeIndex}
                autoplayDelay={10}
                //contentContainerStyle={{ minHeight: `100%` }}
            >
            </SwiperFlatList>          
        </View>
    )
}




const styles = StyleSheet.create({

    backgroundVideo: {
       position:'absolute',
       height:height,
       width:width
    },
    flexHorizontal:{
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between'
    },
    textStyle:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        paddingHorizontal:16
    },
    bottomView:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:1,
        paddingVertical:10,
        position:'absolute',
        bottom:150,
        left:10,
        color:'white'
    },
    profileImgStyle:{
       color:'white',
       fontWeight:'bold'
    },
    rightView:{
        position:'absolute',
        right:10,
        bottom:150,
        alignItems:'center',
        
    }

});



 const data = [ 
    { 
      "sources" : [ "https://media.graphassets.com/8Jp8nnEpSCmTbmbEbdBM" ],
    },

      { 
        "sources" : [ "https://media.graphassets.com/VVYKQbnyQaqmWmK47hPX" ],
      },
      { 
        "sources" : [ "https://media.graphassets.com/53tQ12sTLSjprScn8m3o" ],
      },
      { 
        "sources" : [ "https://media.graphassets.com/tOSU3VK8T7yrsxC1MVEk" ],
      },

      
   ];
