import React from 'react';
import {View, Pressable, Text} from 'react-native';
export const NavBar = ({setView, styles}) => {
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
