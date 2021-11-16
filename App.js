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
  Image,
  Pressable,
  UIManager,
  LayoutAnimation,
} from 'react-native';
import axios from 'axios';
import {DEFAULT_DATA} from './default_data';

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

  const CatCard = ({cat}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const animate = () => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setIsExpanded(!isExpanded);
    };
    return (
      <>
        <Pressable key={cat.id} onPress={animate}>
          <View style={styles.catContainer}>
            {cat.image && (
              <Image style={styles.image} source={{uri: `${cat.image.url}`}} />
            )}
            <Text style={styles.catName}>{cat.name}</Text>
          </View>
          {isExpanded && (
            <Text style={styles.description}>{cat.description}</Text>
          )}
        </Pressable>
      </>
    );
  };

  const catList = () => {
    return cats.map((cat, i) => {
      return <CatCard cat={cat} key={i} />;
    });
  };

  const Favorites = () => {
    return (
      <ScrollView>
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
    <View style={{flex: 1}}>
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
            <Text>Please wait a moment...</Text>
          </View>
        )}
      </ScrollView>
      <View style={styles.navBar}>
        <Pressable onPress={() => setView(0)} style={styles.navButton}>
          <Text style={styles.navButtonText}>CatList</Text>
        </Pressable>
        <Pressable onPress={() => setView(1)} style={styles.navButton}>
          <Text style={styles.navButtonText}>Favorites</Text>
        </Pressable>
        <Pressable onPress={() => setView(2)} style={styles.navButton}>
          <Text style={styles.navButtonText}>Home</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  navButton: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  navButtonText: {
    textAlign: 'center',
    zIndex: -1,
  },
  navBar: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 10,
    right: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 90,
    shadowOffset: {
      width: 10,
      height: 30,
    },
    shadowOpacity: 0.75,
    shadowRadius: 3.5,
    elevation: 5,
  },
  topContainer: {
    // flex: 8,
  },
  catBar: {
    padding: 15,
    flex: 1,
  },
  catContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 15,
    paddingBottom: 5,
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
  description: {
    flex: 1,
    textAlign: 'center',
  },
});

export default App;
