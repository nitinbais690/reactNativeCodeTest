import React from 'react';
import Colors from '../../theme/colors';
import SafeAreaViewContainer from '../atoms/SafeAreaViewContainer';
import StyleText from '../atoms/Text';

function Heading(props) {
  return (
    <SafeAreaViewContainer backgroundColor={Colors.secondary}>
      <StyleText fontSize={15} color={Colors.white} fontWeight={'bold'}>
        {props.title}
      </StyleText>
    </SafeAreaViewContainer>
  );
}

export default Heading;
