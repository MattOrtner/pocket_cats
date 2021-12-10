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
  UIManager,
  FlatList,
} from 'react-native';
import axios from 'axios';
import {DEFAULT_DATA} from './default_data';
import CatCard from './components/CatCard';
import {NavBar} from './components/NavBar';
import Home from './components/Home';

const DEFAULT_USER = {
  name: 'Matthew',
  lastName: 'Ortner',
  description: 'YeaYea I love my cat big WOOP!',
};

const App = () => {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const [cats, setCats] = useState(DEFAULT_DATA);
  const [indexOfFavorites, setIndexOfFavorites] = useState([5, 6, 7]);
  const [user, setUser] = useState(DEFAULT_USER);

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
    return (
      <FlatList
        data={cats}
        style={{flex: 1}}
        renderItem={({item}) => {
          return <CatCard cat={item} />;
        }}
      />
    );
  };

  const returnOurFavorites = () => {
    const favorites = [];
    for (let i = 0; i < indexOfFavorites.length; i += 1) {
      favorites.push(cats[indexOfFavorites[i]]);
    }
    return favorites;
  };

  const Favorites = () => {
    return (
      <FlatList
        data={returnOurFavorites()}
        style={{flex: 1}}
        renderItem={({item}) => {
          return <CatCard cat={item} />;
        }}
        showsVerticalScrollIndicator
      />
    );
  };

  const Home = () => {
    return (
      <View style={{flex: 1}}>
        {user && (
          <View style={{flex: 1}}>
            <Text style={{fontSize: 42}}>Profile</Text>
            <Text style={{fontSize: 64}}>PHOTO</Text>
            <Text style={{fontSize: 16}}>Name: {user.name}</Text>
            <Text style={{fontSize: 16}}>Last: {user.lastName}</Text>
            <Text style={{fontSize: 16}}>Description: {user.description}</Text>
            <Text style={{fontSize: 64}}>Your CATS!</Text>
            <Text style={{fontSize: 64, marginBottom: 100}}>
              PHOTOS.OF.YOUR.CATS
            </Text>
          </View>
        )}
      </View>
    );
  };

  const router = [catList, Home, Favorites];
  const [view, setView] = useState(1);
  return (
    <View style={{flex: 1, backgroundColor: '#f35e5eed'}}>
      <Text style={styles.title}>Pocket_Cats</Text>
      {cats.length > 2 ? (
        <View style={styles.centeredView}>{router[view]()}</View>
      ) : (
        <Text style={styles.loadingScreen}>Please wait a moment...</Text>
      )}
      <NavBar view={view} setView={setView} />
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
  catBar: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    padding: 5,
    fontWeight: '700',
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
