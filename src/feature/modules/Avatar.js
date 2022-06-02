import React from 'react';
import StyleImage from '../atoms/Image';

function Avatar(props) {
  return (
    <StyleImage
      height={50}
      width={50}
      borderRadius={25}
      overFlow={'hidden'}
      source={{uri: props.url}}
    />
  );
}

export default Avatar;
