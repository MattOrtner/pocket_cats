import React, {useState} from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

export const NavBar = ({setView}) => {
  const [listPress, setListPress] = useState(false);
  const [homePress, setHomePress] = useState(true);
  const [favoritesPress, setFavoritesPress] = useState(false);

  const buttonPress = view => {
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
            List
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
            Favs
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
    height: 75,
    width: 80,
    textAlignVertical: 'center',
    shadowRadius: 30,
    shadowColor: 'black',
    backgroundColor: '#9ecfff',
    elevation: 10,
    shadowOffset: {
      width: 50,
      height: 50,
    },
    shadowOpacity: 1,
    fontSize: 16.5,
  },
  navButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#9ecfff',
    height: 80,
  },
});
