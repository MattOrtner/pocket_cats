/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  View,
  ScrollView,
  UIManager,
} from 'react-native';
import axios from 'axios';
import {DEFAULT_DATA} from './default_data';
import CatCard from './components/CatCard';
import {NavBar} from './components/NavBar';

const App = () => {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const [cats, setCats] = useState(DEFAULT_DATA);
  const [favorites, setFavorites] = useState([0, 1, 2, 3]);

  useEffect(() => {
    (async () => {
      try {
        const cat_obj = await axios.get(
          `https://api.thecatapi.com/v1/breeds?=${process.env.REACT_APP_HEADER}=${process.env.REACT_APP_API_KEY}`,
        );
        setCats(cat_obj.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const catList = () => {
    return cats.map((cat, i) => {
      return <CatCard cat={cat} styles={styles} key={i} />;
    });
  };

  const Favorites = () => {
    return (
      <ScrollView>
        <Text>Favorites</Text>
        {favorites.map(i => (
          <CatCard cat={cats[i]} key={i} />
        ))}
      </ScrollView>
    );
  };

  const Home = () => {
    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize: 42}}>Profile</Text>
        <Text style={{fontSize: 64}}>PHOTO</Text>
        <Text style={{fontSize: 16}}>Name:</Text>
        <Text style={{fontSize: 16}}>Description:</Text>
        <Text style={{fontSize: 64}}>Your CATS!</Text>
        <Text style={{fontSize: 64, marginBottom: 100}}>
          PHOTOS.OF.YOUR.CATS
        </Text>
      </View>
    );
  };
  const router = [catList, Favorites, Home];
  const [view, setView] = useState(0);

  return (
    <View style={{flex: 1, backgroundColor: '#f35e5eed'}}>
      <ScrollView style={styles.topContainer}>
        <Text style={styles.title}>Pocket_Cats</Text>
        {cats.length > 2 ? (
          <View style={styles.catBar}>
            <ScrollView style={styles.centeredView}>
              {router[view]()}
            </ScrollView>
          </View>
        ) : (
          <View>
            <Text style={styles.loadingScreen}>Please wait a moment...</Text>
          </View>
        )}
      </ScrollView>
      <NavBar styles={styles} setView={setView} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingScreen: {
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
  },
  // navButton: {
  //   flex: 1,
  //   textAlign: 'center',
  //   justifyContent: 'center',
  // },
  // navButtonText: {
  //   textAlign: 'center',
  //   zIndex: -1,
  // },
  // navBar: {
  //   flexDirection: 'row',
  //   position: 'absolute',
  //   bottom: 20,
  //   left: 10,
  //   right: 10,
  //   backgroundColor: '#ffffff',
  //   borderRadius: 15,
  //   height: 90,
  //   shadowOffset: {
  //     width: 10,
  //     height: 30,
  //   },
  //   shadowOpacity: 0.75,
  //   shadowRadius: 3.5,
  //   elevation: 5,
  // },
  catBar: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingTop: 15,
    paddingBottom: 20,
    fontWeight: '900',
  },
  image: {
    height: 100,
    width: 100,
    left: 20,
  },
  catName: {
    textAlign: 'center',
    fontSize: 16,
    letterSpacing: 0.25,
    backgroundColor: 'lightgray',
    flex: 1,
    zIndex: -1,
  },
});

export default App;
