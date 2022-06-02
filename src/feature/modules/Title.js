import React from 'react';
import Colors from '../../theme/colors';
import RowContainer from '../atoms/RowContainer';
import StyleText from '../atoms/Text';

function Title(props) {
  return (
    <RowContainer>
      <StyleText fontSize={15} color={Colors.primary} fontWeight={'bold'}>
        {props.title}
      </StyleText>
      <StyleText fontSize={15} color={Colors.secondary} fontWeight={'bold'}>
        {props.value}
      </StyleText>
    </RowContainer>
  );
}

export default Title;
