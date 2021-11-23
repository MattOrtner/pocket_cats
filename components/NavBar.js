import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

export const NavBar = ({setView}) => {
  const [listPress, setListPress] = useState(false);
  const [homePress, setHomePress] = useState(false);
  const [favoritesPress, setFavoritesPress] = useState(false);

  const buttonPress = view => {
    console.log('view', view);
    if (view === 0) {
      setListPress(true);
      setHomePress(false);
      setFavoritesPress(false);
    } else if (view === 1) {
      setListPress(false);
      setHomePress(true);
      setFavoritesPress(false);
    } else {
      setListPress(false);
      setHomePress(false);
      setFavoritesPress(true);
    }
    setView(view);
  };

  return (
    <View style={styles.navBar}>
      <Pressable onPress={() => buttonPress(0)} style={styles.navButton}>
        <View style={styles.navButtonContainer}>
          <Text
            style={
              listPress
                ? [styles.navButtonText, styles.pressed]
                : styles.navButtonText
            }>
            CatList
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => buttonPress(1)} style={styles.navButton}>
        <View style={styles.navButtonContainer}>
          <Text
            style={
              homePress
                ? [styles.navButtonText, styles.pressed]
                : styles.navButtonText
            }>
            Home
          </Text>
        </View>
      </Pressable>
      <Pressable onPress={() => buttonPress(2)} style={styles.navButton}>
        <View style={styles.navButtonContainer}>
          <Text
            style={
              favoritesPress
                ? [styles.navButtonText, styles.pressed]
                : styles.navButtonText
            }>
            Favorites
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  pressed: {
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 50,
    height: 80,
    width: 80,
    textAlignVertical: 'center',
    fontStyle: 'italic',
    shadowOffset: {
      width: 10,
      height: 30,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    backgroundColor: '#9ecfff',
    elevation: 5,
  },
  navButtonContainer: {
    // borderWidth: 2,
    // borderColor: '#20232a',
    borderRadius: 50,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 10,
      height: 30,
    },
    shadowOpacity: 1,
    shadowRadius: 3.5,
    backgroundColor: '#9ecfff',
    elevation: 5,
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
    bottom: 15,
    left: 10,
    right: 10,
    backgroundColor: '#9ecfff',
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
});
