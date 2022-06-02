import React from 'react';
import StyleImage from '../atoms/Text';

function Avatar(props) {
  return (
    <StyleImage
      height={50}
      width={50}
      borderRadius={25}
      source={{uri: props.url}}
    />
  );
}

export default Avatar;
