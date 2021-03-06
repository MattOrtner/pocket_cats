import React, {useState} from 'react';
import {
  Pressable,
  View,
  Text,
  Image,
  LayoutAnimation,
  StyleSheet,
} from 'react-native';

const CatCard = ({cat}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animate = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };

  const descriptionStarter = description => {
    let beginningOfDescription = '';
    for (let letter = 0; letter < 41; letter++) {
      beginningOfDescription += description[letter];
    }
    return beginningOfDescription + '... [+]';
  };

  return (
    <>
      <Pressable onPress={animate} style={styles.catCardOuter}>
        <View style={styles.catContainer}>
          <View style={styles.catCardPicAndName}>
            {cat.image && (
              <Image
                style={[styles.image, styles.isExpanded]}
                source={{uri: `${cat.image.url}`}}
              />
            )}
            <Text style={styles.catName}>{cat.name}</Text>
          </View>
          {isExpanded || (
            <Text style={styles.description}>
              {descriptionStarter(cat.description)}
            </Text>
          )}
          {isExpanded && (
            <View>
              <Text style={styles.description}>{cat.description}</Text>
              <View style={styles.attributeContainer}>
                <Text style={styles.attribute}>
                  vocalisation: {cat.vocalisation}
                </Text>
                <Text style={styles.attribute}>
                  affection level: {cat.affection_level}
                </Text>
              </View>
            </View>
          )}
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  attribute: {
    paddingLeft: 15,
  },
  attributeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
  border: {
    borderWidth: 2,
    borderColor: '#20232a',
    textAlign: 'center',
  },
  catCardOuter: {
    paddingBottom: 5,
    flex: 1,
  },
  catContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
    borderRadius: 15,
    paddingBottom: 5,
  },
  image: {
    top: 10,
    height: 150,
    width: 200,
  },
  description: {
    flex: 1,
    textAlign: 'center',
  },
  true: {
    height: 200,
    width: 200,
  },
  catCardPicAndName: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 10,
  },
});
export default CatCard;
