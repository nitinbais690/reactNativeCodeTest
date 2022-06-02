import React from 'react';
import locales from '../../locales';
import Colors from '../../theme/colors';
import RowContainer from '../atoms/RowContainer';
import Wrapper from '../atoms/Wrapper';
import Avatar from '../modules/Avatar';
import Title from '../modules/Title';

function ListItem(props) {
  return (
    <RowContainer
      padding={'10'}
      justifyContent={'space-between'}
      backgroundColor={Colors.white}>
      <Wrapper>
        <Title title={`${locales.name}: `} value={props.item.fullName} />
        <Title title={`${locales.title}: `} value={props.item.title} />
      </Wrapper>

      <Avatar url={props.item.imageUrl} />
    </RowContainer>
  );
}

export default ListItem;
