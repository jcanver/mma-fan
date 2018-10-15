import React from 'react';
import { Image } from 'react-native';

export default function ImageComponent({ ...rest }) {
  return (
    <Image
      resizeMode="contain"
      {...rest}
    />
  );
}
