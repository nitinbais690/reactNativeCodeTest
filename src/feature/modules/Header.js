import React from 'react';
import Colors from '../../theme/colors';
import SafeAreaViewContainer from '../atoms/SafeAreaViewContainer';
import StyleText from '../atoms/Text';

function Header(props) {
  return (
    <SafeAreaViewContainer height={40} backgroundColor={Colors.primary}>
      <StyleText fontSize={15} color={Colors.white} fontWeight={'bold'}>
        {props.title}
      </StyleText>
    </SafeAreaViewContainer>
  );
}

export default Header;
