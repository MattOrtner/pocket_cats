/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import axios from 'axios';
const HEADER = 'x-api-key';
const DEFAULT_INFO = [
  {
    weight: {
      imperial: '7  -  10',
      metric: '3 - 5',
    },
    id: 'abys',
    name: 'Abyssinian',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/Abyssinian.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/abyssinian',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/abyssinian',
    temperament: 'Active, Energetic, Independent, Intelligent, Gentle',
    origin: 'Egypt',
    country_codes: 'EG',
    country_code: 'EG',
    description:
      'The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.',
    life_span: '14 - 15',
    indoor: 0,
    lap: 1,
    alt_names: '',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 3,
    dog_friendly: 4,
    energy_level: 5,
    grooming: 1,
    health_issues: 2,
    intelligence: 5,
    shedding_level: 2,
    social_needs: 5,
    stranger_friendly: 5,
    vocalisation: 1,
    experimental: 0,
    hairless: 0,
    natural: 1,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Abyssinian_(cat)',
    hypoallergenic: 0,
    reference_image_id: '0XYvRd7oD',
    image: {
      id: '0XYvRd7oD',
      width: 1204,
      height: 1445,
      url: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg',
    },
  },
  {
    weight: {
      imperial: '4 - 9',
      metric: '2 - 4',
    },
    id: 'bamb',
    name: 'Bambino',
    temperament: 'Affectionate, Lively, Friendly, Intelligent',
    origin: 'United States',
    country_codes: 'US',
    country_code: 'US',
    description:
      'The Bambino is a breed of cat that was created as a cross between the Sphynx and the Munchkin breeds. The Bambino cat has short legs, large upright ears, and is usually hairless. They love to be handled and cuddled up on the laps of their family members.',
    life_span: '12 - 14',
    indoor: 0,
    lap: 1,
    alt_names: '',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 5,
    grooming: 1,
    health_issues: 1,
    intelligence: 5,
    shedding_level: 1,
    social_needs: 3,
    stranger_friendly: 3,
    vocalisation: 3,
    experimental: 1,
    hairless: 1,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 1,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Bambino_cat',
    hypoallergenic: 0,
    reference_image_id: '5AdhMjeEu',
    image: {
      id: '5AdhMjeEu',
      width: 1296,
      height: 1030,
      url: 'https://cdn2.thecatapi.com/images/5AdhMjeEu.jpg',
    },
  },
  {
    weight: {
      imperial: '6 - 12',
      metric: '3 - 7',
    },
    id: 'beng',
    name: 'Bengal',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/Bengal.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/bengal',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/bengal',
    temperament: 'Alert, Agile, Energetic, Demanding, Intelligent',
    origin: 'United States',
    country_codes: 'US',
    country_code: 'US',
    description:
      "Bengals are a lot of fun to live with, but they're definitely not the cat for everyone, or for first-time cat owners. Extremely intelligent, curious and active, they demand a lot of interaction and woe betide the owner who doesn't provide it.",
    life_span: '12 - 15',
    indoor: 0,
    lap: 0,
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    cat_friendly: 4,
    dog_friendly: 5,
    energy_level: 5,
    grooming: 1,
    health_issues: 3,
    intelligence: 5,
    shedding_level: 3,
    social_needs: 5,
    stranger_friendly: 3,
    vocalisation: 5,
    bidability: 3,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Bengal_(cat)',
    hypoallergenic: 1,
    reference_image_id: 'O3btzLlsO',
    image: {
      id: 'O3btzLlsO',
      width: 1100,
      height: 739,
      url: 'https://cdn2.thecatapi.com/images/O3btzLlsO.png',
    },
  },
  {
    weight: {
      imperial: '6 - 15',
      metric: '3 - 7',
    },
    id: 'birm',
    name: 'Birman',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/Birman.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/birman',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/birman',
    temperament: 'Affectionate, Active, Gentle, Social',
    origin: 'France',
    country_codes: 'FR',
    country_code: 'FR',
    description:
      'The Birman is a docile, quiet cat who loves people and will follow them from room to room. Expect the Birman to want to be involved in what you’re doing. He communicates in a soft voice, mainly to remind you that perhaps it’s time for dinner or maybe for a nice cuddle on the sofa. He enjoys being held and will relax in your arms like a furry baby.',
    life_span: '14 - 15',
    indoor: 0,
    lap: 1,
    alt_names: 'Sacred Birman, Sacred Cat Of Burma',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 3,
    grooming: 2,
    health_issues: 1,
    intelligence: 3,
    shedding_level: 3,
    social_needs: 4,
    stranger_friendly: 3,
    vocalisation: 1,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Birman',
    hypoallergenic: 0,
    reference_image_id: 'HOrX5gwLS',
    image: {
      id: 'HOrX5gwLS',
      width: 1376,
      height: 814,
      url: 'https://cdn2.thecatapi.com/images/HOrX5gwLS.jpg',
    },
  },
  {
    weight: {
      imperial: '6 - 11',
      metric: '3 - 5',
    },
    id: 'bomb',
    name: 'Bombay',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/Bombay.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/bombay',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/bombay',
    temperament: 'Affectionate, Dependent, Gentle, Intelligent, Playful',
    origin: 'United States',
    country_codes: 'US',
    country_code: 'US',
    description:
      "The the golden eyes and the shiny black coa of the Bopmbay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.",
    life_span: '12 - 16',
    indoor: 0,
    lap: 1,
    alt_names: 'Small black Panther',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 3,
    grooming: 1,
    health_issues: 3,
    intelligence: 5,
    shedding_level: 3,
    social_needs: 4,
    stranger_friendly: 4,
    vocalisation: 5,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Bombay_(cat)',
    hypoallergenic: 0,
    reference_image_id: '5iYq9NmT1',
    image: {
      id: '5iYq9NmT1',
      width: 1250,
      height: 650,
      url: 'https://cdn2.thecatapi.com/images/5iYq9NmT1.jpg',
    },
  },
  {
    weight: {
      imperial: '8 - 18',
      metric: '4 - 8',
    },
    id: 'bslo',
    name: 'British Longhair',
    temperament:
      'Affectionate, Easy Going, Independent, Intelligent, Loyal, Social',
    origin: 'United Kingdom',
    country_codes: 'GB',
    country_code: 'GB',
    description:
      'The British Longhair is a very laid-back relaxed cat, often perceived to be very independent although they will enjoy the company of an equally relaxed and likeminded cat. They are an affectionate breed, but very much on their own terms and tend to prefer to choose to come and sit with their owners rather than being picked up.',
    life_span: '12 - 14',
    indoor: 0,
    alt_names: '',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 4,
    grooming: 5,
    health_issues: 1,
    intelligence: 5,
    shedding_level: 1,
    social_needs: 3,
    stranger_friendly: 4,
    vocalisation: 1,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/British_Longhair',
    hypoallergenic: 0,
    reference_image_id: '7isAO4Cav',
    image: {
      id: '7isAO4Cav',
      width: 960,
      height: 960,
      url: 'https://cdn2.thecatapi.com/images/7isAO4Cav.jpg',
    },
  },
  {
    weight: {
      imperial: '12 - 20',
      metric: '5 - 9',
    },
    id: 'bsho',
    name: 'British Shorthair',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/BritishShorthair.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/british-shorthair',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/british-shorthair',
    temperament: 'Affectionate, Easy Going, Gentle, Loyal, Patient, calm',
    origin: 'United Kingdom',
    country_codes: 'GB',
    country_code: 'GB',
    description:
      "The British Shorthair is a very pleasant cat to have as a companion, ans is easy going and placid. The British is a fiercely loyal, loving cat and will attach herself to every one of her family members. While loving to play, she doesn't need hourly attention. If she is in the mood to play, she will find someone and bring a toy to that person. The British also plays well by herself, and thus is a good companion for single people.",
    life_span: '12 - 17',
    indoor: 0,
    lap: 1,
    alt_names: 'Highlander, Highland Straight, Britannica',
    adaptability: 5,
    affection_level: 4,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 2,
    grooming: 2,
    health_issues: 2,
    intelligence: 3,
    shedding_level: 4,
    social_needs: 3,
    stranger_friendly: 2,
    vocalisation: 1,
    experimental: 0,
    hairless: 0,
    natural: 1,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/British_Shorthair',
    hypoallergenic: 0,
    reference_image_id: 's4wQfYoEk',
    image: {
      id: 's4wQfYoEk',
      width: 1600,
      height: 1457,
      url: 'https://cdn2.thecatapi.com/images/s4wQfYoEk.jpg',
    },
  },
  {
    weight: {
      imperial: '6 - 12',
      metric: '3 - 5',
    },
    id: 'bure',
    name: 'Burmese',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/Burmese.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/burmese',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/burmese',
    temperament:
      'Curious, Intelligent, Gentle, Social, Interactive, Playful, Lively',
    origin: 'Burma',
    country_codes: 'MM',
    country_code: 'MM',
    description:
      'Burmese love being with people, playing with them, and keeping them entertained. They crave close physical contact and abhor an empty lap. They will follow their humans from room to room, and sleep in bed with them, preferably under the covers, cuddled as close as possible. At play, they will turn around to see if their human is watching and being entertained by their crazy antics.',
    life_span: '15 - 16',
    indoor: 0,
    lap: 1,
    alt_names: '',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 4,
    grooming: 1,
    health_issues: 3,
    intelligence: 5,
    shedding_level: 3,
    social_needs: 5,
    stranger_friendly: 5,
    vocalisation: 5,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Burmese_(cat)',
    hypoallergenic: 1,
    reference_image_id: '4lXnnfxac',
    image: {
      id: '4lXnnfxac',
      width: 1250,
      height: 650,
      url: 'https://cdn2.thecatapi.com/images/4lXnnfxac.jpg',
    },
  },
  {
    weight: {
      imperial: '6 - 13',
      metric: '3 - 6',
    },
    id: 'buri',
    name: 'Burmilla',
    cfa_url: 'http://cfa.org/Breeds/BreedsAB/Burmilla.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/burmilla',
    temperament: 'Easy Going, Friendly, Intelligent, Lively, Playful, Social',
    origin: 'United Kingdom',
    country_codes: 'GB',
    country_code: 'GB',
    description:
      'The Burmilla is a fairly placid cat. She tends to be an easy cat to get along with, requiring minimal care. The Burmilla is affectionate and sweet and makes a good companion, the Burmilla is an ideal companion to while away a lonely evening. Loyal, devoted, and affectionate, this cat will stay by its owner, always keeping them company.',
    life_span: '10 - 15',
    indoor: 0,
    lap: 1,
    alt_names: '',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 4,
    energy_level: 3,
    grooming: 3,
    health_issues: 3,
    intelligence: 3,
    shedding_level: 3,
    social_needs: 4,
    stranger_friendly: 3,
    vocalisation: 5,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Burmilla',
    hypoallergenic: 0,
    reference_image_id: 'jvg3XfEdC',
    image: {
      id: 'jvg3XfEdC',
      width: 960,
      height: 960,
      url: 'https://cdn2.thecatapi.com/images/jvg3XfEdC.jpg',
    },
  },
  {
    weight: {
      imperial: '10 - 15',
      metric: '5 - 7',
    },
    id: 'cspa',
    name: 'California Spangled',
    temperament: 'Affectionate, Curious, Intelligent, Loyal, Social',
    origin: 'United States',
    country_codes: 'US',
    country_code: 'US',
    description:
      'Perhaps the only thing about the California spangled cat that isn’t wild-like is its personality. Known to be affectionate, gentle and sociable, this breed enjoys spending a great deal of time with its owners. They are very playful, often choosing to perch in high locations and show off their acrobatic skills.',
    life_span: '10 - 14',
    indoor: 0,
    alt_names: 'Spangle',
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 5,
    grooming: 1,
    health_issues: 1,
    intelligence: 5,
    shedding_level: 1,
    social_needs: 3,
    stranger_friendly: 4,
    vocalisation: 1,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/California_Spangled',
    hypoallergenic: 0,
    reference_image_id: 'B1ERTmgph',
    image: {
      id: 'B1ERTmgph',
      width: 1200,
      height: 688,
      url: 'https://cdn2.thecatapi.com/images/B1ERTmgph.jpg',
    },
  },
  {
    weight: {
      imperial: '5 - 10',
      metric: '2 - 5',
    },
    id: 'java',
    name: 'Javanese',
    vetstreet_url: 'http://www.vetstreet.com/cats/javanese',
    vcahospitals_url:
      'https://vcahospitals.com/know-your-pet/cat-breeds/javanese',
    temperament: 'Active, Devoted, Intelligent, Playful',
    origin: 'United States',
    country_codes: 'US',
    country_code: 'US',
    description:
      'Javanese are endlessly interested, intelligent and active. They tend to enjoy jumping to great heights, playing with fishing pole-type or other interactive toys and just generally investigating their surroundings. He will attempt to copy things you do, such as opening doors or drawers.',
    life_span: '10 - 12',
    indoor: 0,
    alt_names: ' ',
    adaptability: 4,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 4,
    energy_level: 5,
    grooming: 1,
    health_issues: 3,
    intelligence: 5,
    shedding_level: 2,
    social_needs: 5,
    stranger_friendly: 3,
    vocalisation: 5,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Javanese_cat',
    hypoallergenic: 1,
    reference_image_id: 'xoI_EpOKe',
    image: {
      id: 'xoI_EpOKe',
      width: 1232,
      height: 1287,
      url: 'https://cdn2.thecatapi.com/images/xoI_EpOKe.jpg',
    },
  },
  {
    weight: {
      imperial: '8 - 12',
      metric: '4 - 6',
    },
    id: 'khao',
    name: 'Khao Manee',
    cfa_url: 'http://cfa.org/Breeds/BreedsKthruR/KhaoManee.aspx',
    temperament: 'Calm, Relaxed, Talkative, Playful, Warm',
    origin: 'Thailand',
    country_codes: 'TH',
    country_code: 'TH',
    description:
      'The Khao Manee is highly intelligent, with an extrovert and inquisitive nature, however they are also very calm and relaxed, making them an idea lap cat.',
    life_span: '10 - 12',
    indoor: 0,
    lap: 1,
    alt_names: 'Diamond Eye cat',
    adaptability: 4,
    affection_level: 4,
    child_friendly: 3,
    cat_friendly: 3,
    dog_friendly: 3,
    energy_level: 3,
    grooming: 3,
    health_issues: 1,
    intelligence: 4,
    shedding_level: 3,
    social_needs: 3,
    stranger_friendly: 3,
    vocalisation: 5,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 0,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Khao_Manee',
    hypoallergenic: 0,
    reference_image_id: '165ok6ESN',
    image: {
      id: '165ok6ESN',
      width: 1555,
      height: 1037,
      url: 'https://cdn2.thecatapi.com/images/165ok6ESN.jpg',
    },
  },
  {
    weight: {
      imperial: '7 - 11',
      metric: '3 - 5',
    },
    id: 'kora',
    name: 'Korat',
    cfa_url: 'http://cfa.org/Breeds/BreedsKthruR/Korat.aspx',
    vetstreet_url: 'http://www.vetstreet.com/cats/korat',
    vcahospitals_url: 'https://vcahospitals.com/know-your-pet/cat-breeds/korat',
    temperament: 'Active, Loyal, highly intelligent, Expressive, Trainable',
    origin: 'Thailand',
    country_codes: 'TH',
    country_code: 'TH',
    description:
      'The Korat is a natural breed, and one of the oldest stable cat breeds. They are highly intelligent and confident cats that can be fearless, although they are startled by loud sounds and sudden movements. Korats form strong bonds with their people and like to cuddle and stay nearby.',
    life_span: '10 - 15',
    indoor: 0,
    adaptability: 5,
    affection_level: 5,
    child_friendly: 4,
    dog_friendly: 5,
    energy_level: 3,
    grooming: 1,
    health_issues: 1,
    intelligence: 5,
    shedding_level: 3,
    social_needs: 5,
    stranger_friendly: 2,
    vocalisation: 3,
    experimental: 0,
    hairless: 0,
    natural: 0,
    rare: 1,
    rex: 0,
    suppressed_tail: 0,
    short_legs: 0,
    wikipedia_url: 'https://en.wikipedia.org/wiki/Korat',
    hypoallergenic: 0,
    reference_image_id: 'DbwiefiaY',
    image: {
      id: 'DbwiefiaY',
      width: 1200,
      height: 627,
      url: 'https://cdn2.thecatapi.com/images/DbwiefiaY.png',
    },
  },
];

const App = () => {
  const [cats, setCats] = useState(DEFAULT_INFO);
  useEffect(() => {
    (async () => {
      try {
        const cat_obj = await axios.get(
          `https://api.thecatapi.com/v1/breeds?=${HEADER}=${process.env.REACT_APP_API_KEY}`,
        );
        console.log(cat_obj);
        setCats(cat_obj.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const catList = () => {
    return cats.map((cat, i) => {
      return (
        <Pressable key={i}>
          <View style={styles.centeredView}>
            <Text style={styles.modalText}>{cat.name}</Text>
          </View>
        </Pressable>
      );
    });
  };

  return (
    <ScrollView>
      {cats.length > 2 ? (
        <>
          <Text>pocket_cats</Text>
          <View style={styles.centeredView}>{catList()}</View>
        </>
      ) : (
        <Text>nothing here...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;