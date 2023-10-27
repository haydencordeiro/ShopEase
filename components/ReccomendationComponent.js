import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import {Platform} from 'react-native';

const isWeb = Platform.OS === 'web';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const ReccomendationComponent = ({item, setModalVisible,setSelectedProduct}) => {

  return (
    <TouchableOpacity style={isWeb ? styles.containerWeb: styles.containerAndroid} onPress={() => {setSelectedProduct(item);setModalVisible(true)}}>
      <View>
      <View style={styles.imageContainer}>      
      <Image
        style={styles.image}
        source={item.productImageUrl}
        placeholder={blurhash}
        contentFit="contain"
        transition={1000}
      /></View>
      <View style={{display:'flex',flexDirection:'row', marginHorizontal:10}}>
        <View style={{flex:1}}><Text style={styles.titleText}>{item.productName}</Text></View>
        {/* <View style={{flex:1,right:0,position:'absolute'}}><Text style={styles.priceText}>${item.productPrice}</Text></View> */}
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.subtitleText}>${item.productPrice}</Text>
      </View>
      </View>
    </TouchableOpacity>

  );
}

export default ReccomendationComponent;

const styles = StyleSheet.create({
  titleText:{
    fontSize: 16,
   // marginBottom:2,
    fontWeight: 'bold',
    color: '#333749',
  },
  subtitleText:{
   // marginBottom:2,
    fontSize: 12,
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
    height: 260,
    backgroundColor: 'rgba(52, 52, 52, alpha)'

  },
  dataContainer:{
    fontSize:16,
    marginHorizontal:10,
    backgroundColor: 'rgba(52, 52, 52, alpha)',
    // backgroundColor: 'red',

  },
  containerAndroid: {
    backgroundColor: 'black',
    padding: 2,
    backgroundColor:'#FFFFFF',
    flexBasis: '50%'
  },
  containerWeb: {
    backgroundColor: 'black',
    padding: 2,
    backgroundColor:'#FFFFFF',
    flexBasis: '25%'
  },
});
