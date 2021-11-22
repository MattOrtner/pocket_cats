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
  const styles = StyleSheet.create({
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
      height: 100,
      width: 100,
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
    },
  });
  const descriptionStarter = description => {
    let beginningOfDescription = '';
    for (let letter = 0; letter < 41; letter++) {
      beginningOfDescription += description[letter];
    }
    return beginningOfDescription + '... [+]';
  };

  return (
    <>
      <Pressable key={cat.id} onPress={animate} style={styles.catCardOuter}>
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
              {descriptionStarter(cat.description, cat.id)}
            </Text>
          )}
          {isExpanded && (
            <Text style={styles.description}>{cat.description}</Text>
          )}
        </View>
      </Pressable>
    </>
  );
};

export default CatCard;
