import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import { Image } from 'expo-image';
import {Platform} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const isWeb = Platform.OS === 'web';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const ReccomendationComponent = () => {

  return (
    <View style={isWeb ? styles.containerWeb: styles.containerAndroid}>
      <View style={styles.imageContainer}>      
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={blurhash}
        contentFit="cover"
        transition={1000}
      /></View>
      <View style={styles.dataContainer}>
        <Text style={styles.titleText}>Forever New</Text>
        <Text style={styles.subtitleText}>Womens Slimline Laptop Code</Text>
        <Text style={styles.priceText}>$4956</Text>
        </View>
    </View>

  );
}

export default ReccomendationComponent;

const styles = StyleSheet.create({
  titleText:{
    fontSize: 16,
    marginBottom:2,
    fontWeight: 'bold',
    color: '#333749',
  },
  subtitleText:{
    marginBottom:2,
    fontSize: 13,
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
    // backgroundColor: 'red',
  },
  imageContainer:{
    height: 170,
    backgroundColor: 'white'
  },
  dataContainer:{
    height: 85,
    backgroundColor: '#FFFFFF'
  },
  containerAndroid: {
    // flex: 1,
    backgroundColor: 'black',
    padding: 1,
    backgroundColor:'#FFFFFF',
    flexBasis: '50%'
    // width: '40%'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  containerWeb: {
    // flex: 1,
    backgroundColor: 'black',
    padding: 1,
    backgroundColor:'#FFFFFF',
    flexBasis: '25%'
    // width: '40%'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
