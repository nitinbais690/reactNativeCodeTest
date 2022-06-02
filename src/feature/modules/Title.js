import React from 'react';
import Colors from '../../theme/colors';
import StyleText from '../atoms/Text';

function Title(props) {
  return (
    <StyleText fontSize={15} color={Colors.primary} fontWeight={'600'}>
      {props.title}
    </StyleText>
  );
}

export default Title;
