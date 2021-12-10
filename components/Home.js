import React from 'react';

import {View, Text} from 'react-native';

const Home = ({user}) => {
  return (
    <View style={{flex: 1}}>
      {user && (
        <View style={{flex: 1}}>
          <Text style={{fontSize: 42}}>Profile</Text>
          <Text style={{fontSize: 64}}>PHOTO</Text>
          <Text style={{fontSize: 16}}>Name: {user.name}</Text>
          <Text style={{fontSize: 16}}>Last: {user.lastName}</Text>
          <Text style={{fontSize: 16}}>Description: {user.description}</Text>
          <Text style={{fontSize: 64}}>Your CATS!</Text>
          <Text style={{fontSize: 64, marginBottom: 100}}>
            PHOTOS.OF.YOUR.CATS
          </Text>
        </View>
      )}
    </View>
  );
};

export default Home;
