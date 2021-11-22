import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';

export const NavBar = ({setView}) => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
    bottom: 10,
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
