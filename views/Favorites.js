import React from 'react';
import {ScrollView} from 'react-native';
import CatCard from '../components/CatCard';

const Favorites = ({favorites, cats}) => {
  return (
    <ScrollView>
      {favorites.map(i => (
        <CatCard cat={cats[i]} key={i} />
      ))}
    </ScrollView>
  );
};

export default Favorites;
