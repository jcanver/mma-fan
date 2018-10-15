// @flow

/**
 * HOC to pass default font to react-native Text component
 */
import * as React from 'react';
import PropTypes from 'prop-types';
// $FlowFixMe
import { Text } from 'react-native';

const getFont = (semiBold, bold, extraBold, boldest) => {
  let fontFamily = 'proxima-soft-regular';
  if (semiBold) {
    fontFamily = 'proxima-soft-semi-bold';
  }
  if (bold) {
    fontFamily = 'proxima-soft-bold';
  }
  if (extraBold) {
    fontFamily = 'proxima-soft-extra-bold';
  }
  if (boldest) {
    fontFamily = 'proxima-soft-boldest';
  }
  return {
    fontFamily
  };
};

type TextProps = {
  children: React.Node,
  bold?: boolean,
  small?: boolean,
  centered?: boolean,
  fontSize?: number,
  style?: Object|number|Array<Object|number>,
  color?: string|boolean,
  [x: string]: *
}

const FontText = (props: TextProps) => {
  const {
    children,
    semiBold,
    bold,
    extraBold,
    boldest,
    style,
    color,
    fontSize,
    centered,
    small,
    shadow,
    ...rest
  } = props;

  const regularSize = 18;
  const smallSize = 16;

  const textStyle = [
    {
      color: theme[color],
      fontSize: fontSize || (small ? smallSize : regularSize),
      textAlign: centered ? 'center' : 'left',
      backgroundColor: 'rgba(0,0,0,0)',
      textShadowColor: `rgba(0, 0, 0, ${shadow ? '0.16' : '0'})`,
      textShadowRadius: 6,
      textShadowOffset: {
        width: 0,
        height: 3
      }
    },
    getFont(semiBold, bold, extraBold, boldest),
    style
  ];

  return (
    <Text {...rest} style={textStyle}>
      {children}
    </Text>
  );
};

FontText.propTypes = {
  children: PropTypes.node,
  bold: PropTypes.bool,
  small: PropTypes.bool,
  centered: PropTypes.bool,
  fontSize: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ]),
  color: PropTypes.string,
  shadow: PropTypes.bool
};

FontText.defaultProps = {
  color: 'primary'
};

export default FontText;
