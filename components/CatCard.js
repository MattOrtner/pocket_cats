import React, {useState} from 'react';
import {Pressable, View, Text, Image, LayoutAnimation} from 'react-native';

const CatCard = ({cat, styles}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const animate = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Pressable key={cat.id} onPress={animate} style={styles.catCardOuter}>
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

export default CatCard;
