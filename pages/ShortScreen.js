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
        bottom:120,
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
        bottom:120,
        alignItems:'center',
        
    }

});



 const data = [ 
    { "description" : "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ],
      "subtitle" : "By Blender Foundation",
      "title" : "Big Buck Bunny"
    },
    { "description" : "The first Blender Open Movie from 2006",
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ],
      "subtitle" : "By Blender Foundation",

      "title" : "Elephant Dream"
    },
    { "description" : "HBO GO now works with Chromecast -- the easiest way to enjoy online video on your TV. For when you want to settle into your Iron Throne to watch the latest episodes. For $35.\nLearn how to use Chromecast with HBO GO and more at google.com/chromecast.",
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" ],
      "subtitle" : "By Google",
      "title" : "For Bigger Blazes"
    },
    { "description" : "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
      "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" ],
      "subtitle" : "By Google",
      "title" : "For Bigger Escape"
    },
   ];
