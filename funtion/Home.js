import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  StatusBar
} from 'react-native';
import {
  Ionicons,
  AntDesign,
  Feather
} from '@expo/vector-icons';
import DATA from '../FlastList/Data';
import Item from '../FlastList/ItemMenu';
import ProductList from '../FlastList/DetailHot/DATA.js';
const { height } = Dimensions.get('screen');
const { width } = Dimensions.get('screen');
const App = () => {
  const Onpress = () =>{
      
  }
  const renderItem = ({ item }) => (
    <Item 
      source={item.img} onpress={Onpress}/>
  )

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} barStyle='light-content' />
      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignSelf: 'flex-start', flex: 1, marginLeft: 10 }}>
          <Image source={require('../Image/logo-removebg-preview.png')} style={styles.Logo} />
        </View>
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <View style={{ marginRight: 10 }}>
            <TouchableOpacity
              onPress={null}
            >
              <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={null}
          >
            <Feather name="shopping-bag" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.Menu}>

          <View style={styles.InsideMenu}>
            <FlatList
              numColumns={4}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={value => value.id}
            />
          </View>

          <TouchableOpacity >
            <Ionicons name='arrow-forward-circle-outline' size={27} color='black' />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.ViewSide}>
        <Text style={{ fontSize: 18, paddingLeft: 10 }}>Hôm Nay Có Gì Hot !</Text>
        <ProductList/>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,

  },
  Menu: {
    backgroundColor: '#F7D59C',
    width: 328,
    height: 133,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  InsideMenu: {
    width: 275,
    height: 133,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  ViewSide: {
    width: width - 15,
    height: height / 1.25,
    backgroundColor: '#fff',
    paddingVertical: 10,

  },
  Logo: {
    height: 35,
    width: 70,

  },
});
export default App;