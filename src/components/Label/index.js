import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import Text from 'src/components/Text'

export default function Label({ children, color, ...props }) {
  return (
    <View>
      <Text fontSize={20} color={color} {...props}>{children}</Text>
    </View>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}
