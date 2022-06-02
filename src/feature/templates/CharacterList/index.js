import React from 'react';
import {SectionList} from 'react-native';
import locales from '../../../locales';
import Colors from '../../../theme/colors';
import Container from '../../atoms/Container';
import Heading from '../../modules/Heading';
import useCharacterList from '../../hooks/useCharacterList';

function CharacterListScreen() {
  const {loading, data, error}= useCharacterList();
  console.log(loading);
  console.log(data);
  console.log(error);
  return (
    <Container backgroundColor={Colors.white}>
      <Heading title={'Home'} />
        {/* <SectionList
          sections={[]}
        /> */}
    </Container>
  );
}

export default CharacterListScreen;
