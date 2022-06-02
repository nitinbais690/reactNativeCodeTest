import React from 'react';
import {SectionList, ActivityIndicator} from 'react-native';
import Colors from '../../../theme/colors';
import Container from '../../atoms/Container';
import Heading from '../../modules/Heading';
import useCharacterList from '../../hooks/useCharacterList';
import ListItem from '../../oraganism/ListItem';
import Header from '../../modules/Header';
import locales from '../../../locales';

function CharacterListScreen() {
  const {loading, data} = useCharacterList();
  return (
    <Container backgroundColor={Colors.white}>
      <Heading title={locales.title} />
      {loading ? (
        <ActivityIndicator size={'large'} color={Colors.primary} />
      ) : (
        Array.isArray(data) && (
          <SectionList
            sections={data}
            renderItem={({item}) => {
              return <ListItem item={item} />;
            }}
            renderSectionHeader={({section}) => {
              return <Header title={section.title} />;
            }}
          />
        )
      )}
    </Container>
  );
}

export default CharacterListScreen;
