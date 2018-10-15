import React from 'react';
import PropTypes from 'prop-types';
import theme from 'src/theme';
import SvgIcon from './SvgIcon';

import icons from './icons';

const Icon = (props) => {
  const { name, fill, style, ...rest } = props;
  const thmFill = theme[fill] || fill || theme.primary;
  return (<SvgIcon name={name} fill={thmFill} {...rest} svgs={icons} style={style} />);
};

export * as VI from '@expo/vector-icons';
export default Icon;

Icon.propTypes = {
  fill: PropTypes.string,
  name: PropTypes.string.isRequired,
  props: PropTypes.object,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  viewBox: PropTypes.string
};

Icon.defaultProps = {
  fill: theme.primary,
  viewBox: '0 0 50 50'
};
