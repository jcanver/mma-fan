import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Text from 'src/components/Text'

export default function Heading({ wrapperStyle, style, children, ...props }) {
  return (
    <View style={wrapperStyle}>
      <Text fontSize={28} style={style} {...props}>{children}</Text>
    </View>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired
}
