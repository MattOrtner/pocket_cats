import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  View,
  Text,
  Image,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';

const CatCardCampact = ({cat}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animate = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Pressable onPress={animate} style={styles.catCardOuter}>
        {isExpanded ? (
          <Image style={styles.image} source={{uri: `${cat.image.url}`}} />
        ) : (
          <View style={styles.popUp}>
            <Image
              style={[styles.imageOpen, styles.isExpanded]}
              source={{uri: `${cat.image.url}`}}
            />
            <Text style={styles.description}>{cat.description}</Text>
            <View style={styles.flex}>
              <Text>vocalisation: {cat.vocalisation}</Text>
              <Text>affection level: {cat.affection_level}</Text>
            </View>
          </View>
        )}
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  imageOpen: {
    height: 250,
    width: 350,
  },
  border: {
    borderWidth: 2,
    borderColor: '#20232a',
    textAlign: 'center',
  },
  catCardOuter: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 150,
    width: 200,
    borderColor: 'white',
    borderWidth: 3,
  },
  description: {
    flex: 1,
    textAlign: 'center',
  },
});
export default CatCardCampact;
