import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import {Platform} from 'react-native';

const isWeb = Platform.OS === 'web';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const ReccomendationComponent = ({item}) => {

  return (
    <View style={isWeb ? styles.containerWeb: styles.containerAndroid}>
      <View style={styles.imageContainer}>      
      <Image
        style={styles.image}
        source={item.image}
        placeholder={blurhash}
        contentFit="contain"
        transition={1000}
      /></View>
      <View style={styles.dataContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.subtitleText}>{item.description}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
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
  },
  imageContainer:{
    height: 270,
    backgroundColor: 'white'
  },
  dataContainer:{
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
