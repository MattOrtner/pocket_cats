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
  TouchableOpacity,
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
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
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
    return cats.map(cat => {
      return <CatCard cat={cat} />;
    });
  };

  return (
    <ScrollView>
      {cats.length > 2 ? (
        <View style={styles.catBar}>
          <Text style={styles.title}>Pocket_Cats</Text>
          <View style={styles.centeredView}>{catList()}</View>
        </View>
      ) : (
        <Text>Please wait a moment...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  catBar: {
    padding: 15,
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
  },
});

export default App;
