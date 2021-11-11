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
  Text,
  View,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import axios from 'axios';
import {DEFAULT_DATA} from './default_data';

const App = () => {
  const [cats, setCats] = useState(DEFAULT_DATA);
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
    return cats.map(cat => {
      console.log(cat.image, cat.name);
      return (
        <Pressable key={cat.id}>
          {cat.image && (
            <Image style={styles.image} source={{uri: `${cat.image.url}`}} />
          )}
          <Text style={styles.catButtons}>{cat.name}</Text>
          <Text>{cat.description}</Text>
        </Pressable>
      );
    });
  };

  return (
    <ScrollView>
      {cats.length > 2 ? (
        <>
          <Text style={styles.title}>Pocket_Cats</Text>
          <View style={styles.centeredView}>{catList()}</View>
        </>
      ) : (
        <Text>nothing here...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    elevation: 4,
    fontSize: 32,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingBottom: 20,
    borderColor: 'red',
    fontWeight: '900',
  },
  image: {
    height: 100,
    width: 100,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  catButtons: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 16,
    backgroundColor: 'white',
    letterSpacing: 0.25,
  },
});

export default App;
