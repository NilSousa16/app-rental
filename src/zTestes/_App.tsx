// Example of GridView using FlatList in React Native
// https://aboutreact.com/example-of-gridview-using-flatlist-in-react-native/

// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Image,
  Text
} from 'react-native';


const HINOLIST = [
  {
    id: '1',
    title: 'Ó Deus de Amor',
    englishTitle: 'Before Jehova\'s Awful Throne',
    section: 'Section 1',
  },
  {
    id: '2',
    title: 'Ó Adorai o senhor',
    englishTitle: 'O Worship the Lord',
    section: 'Section 1',
  },
  {
    id: '3',
    title: 'O Deus Eterno Reina',
    englishTitle: 'The Lord in Zion Reigneth',
    section: 'Section 7',
  },
  {
    id: '4',
    title: 'Louvor ao Trino Deus',
    englishTitle: 'Praise Ye the Father',
    section: 'Section 7',
  },
  {
    id: '5',
    title: 'Supremo Criador',
    englishTitle: 'My Maker and My King',
    section: 'Section 7',
  },
  {
    id: '6',
    title: 'Por Belezas Naturais',
    englishTitle: 'For the Beauty of the Earth',
    section: 'Section 7',
  },
  {
    id: '7',
    title: 'Sejas Louvado',
    englishTitle: 'Praise to the Lord',
    section: 'Section 7',
  },
  {
    id: '8',
    title: 'A Ti Rendemos Glórias',
    englishTitle: 'All Glory, Laud, and Honor',
    section: 'Section 7',
  },
  {
    id: '9',
    title: 'Prece ao Trino Deus',
    englishTitle: 'Come, Thou Almighty King',
    section: 'Section 7',
  },
  {
    id: '15',
    title: 'Vós, Criatura do Senhor',
    englishTitle: 'All Creatures of Our God and King',
    section: 'Section 7',
  },
  {
    id: '16',
    title: 'A Deus Demos Glória',
    englishTitle: 'To God Be the Glory',
    section: 'Section 5',
  },
  {
    id: '17',
    title: 'Nós te Adoramos',
    englishTitle: 'Nous T\'adorons, Dieu Vivant',
    section: 'Section 2',
  },
  {
    id: '18',
    title: 'Santo! Santo! Santo!',
    englishTitle: 'Holy, Holy, Holy',
    section: 'Section 3',
  },
  {
    id: '19',
    title: 'Ao Coro dos Arcanjos',
    englishTitle: 'Pour Chanter les Louanges',
    section: 'Section 5',
  },
];

const App = () => {
  const [dataSource, setDataSource] = useState([]);

  // useState(() => {
  //   let items = Array.apply(null, Array(60)).map((v, i) => {
  //     return {
  //       id: i,
  //       src: 'http://placehold.it/100x100?text=' + (i + 1)
  //     };
  //   });
  //   setDataSource(items);
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={HINOLIST}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              margin: 1
            }}>
            <Text onPress={() => alert('This is a button right!')}>
              Nilson
            </Text>
          </View>
        )}
        //Setting the number of column
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});