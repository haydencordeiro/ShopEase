import { StatusBar } from 'expo-status-bar';
import {ScrollView , StyleSheet, Text, View,SafeAreaView, FlatList } from 'react-native';
import ReccomendationComponent from '../components/ReccomendationComponent'

const HomeScreen = () => {

    const data = [
        { id: '1', color: 'red', text: 'Item 1' },
        { id: '2', color: 'green', text: 'Item 2' },
        { id: '3', color: 'blue', text: 'Item 3' },
        { id: '4', color: 'orange', text: 'Item 4' },
        { id: '5', color: 'purple', text: 'Item 5' },
        { id: '6', color: 'pink', text: 'Item 6' },
        { id: '7', color: 'yellow', text: 'Item 7' },
        { id: '8', color: 'brown', text: 'Item 8' },
        { id: '9', color: 'cyan', text: 'Item 9' },
        { id: '10', color: 'magenta', text: 'Item 10' },
        { id: '11', color: 'teal', text: 'Item 11' },
        { id: '12', color: 'indigo', text: 'Item 12' },
        { id: '13', color: 'maroon', text: 'Item 13' },
        { id: '14', color: 'lime', text: 'Item 14' },
        { id: '15', color: 'gold', text: 'Item 15' },
        { id: '16', color: 'silver', text: 'Item 16' },
        { id: '17', color: 'gray', text: 'Item 17' },
        { id: '18', color: 'olive', text: 'Item 18' },
        { id: '19', color: 'navy', text: 'Item 19' },
        { id: '20', color: 'coral', text: 'Item 20' },
        { id: '21', color: 'cyan', text: 'Item 21' },
        { id: '22', color: 'violet', text: 'Item 22' },
        { id: '23', color: 'salmon', text: 'Item 23' },
        { id: '24', color: 'tomato', text: 'Item 24' },
        // Add more items as needed
      ];

      const renderItem = ({ item }) => (
        <ReccomendationComponent/>
      );
  return (

    <SafeAreaView style={{margin:4}}>

    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2} // Number of columns in the grid
      styles={styles.container}
    />

{/* </View> */}
  </SafeAreaView>

  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'red',
  },
});
