import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Svg } from 'expo'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'

import Text from 'src/components/Text'

export default function Champ() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.copyWrapper}>
        <View style={styles.name}>
          <Text fontSize={22} color="gold">First</Text>
          <Text fontSize={22} color="gold">Last</Text>
        </View>
        <Text
          fontSize={14}
          color="gold"
          bold
        >
          14-12-1
        </Text>
      </View>
      <SvgAnimatedLinearGradient
        height={150}
        primaryColor="#869b9d"
        secondaryColor={theme.primary}
        >
        <Svg.Path
          d="M 30.933594 32.527344 C 30.785156 30.914063 30.84375 29.789063 30.84375 28.316406 C 31.574219 27.933594 32.882813 25.492188 33.101563 23.429688 C 33.675781 23.382813 34.582031 22.824219 34.847656 20.613281 C 34.988281 19.425781 34.421875 18.757813 34.074219 18.546875 C 35.007813 15.738281 36.949219 7.046875 30.488281 6.148438 C 29.820313 4.980469 28.117188 4.390625 25.90625 4.390625 C 17.050781 4.554688 15.984375 11.078125 17.925781 18.546875 C 17.578125 18.757813 17.011719 19.425781 17.152344 20.613281 C 17.421875 22.824219 18.324219 23.382813 18.898438 23.429688 C 19.117188 25.492188 20.476563 27.933594 21.210938 28.316406 C 21.210938 29.789063 21.265625 30.914063 21.117188 32.527344 C 19.367188 37.238281 7.546875 35.914063 7 45 L 45 45 C 44.453125 35.914063 32.683594 37.238281 30.933594 32.527344 Z "
          width="100"
          height="100"
          x="0"
          y="0"
          fill={theme.primary}
        />
      </SvgAnimatedLinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between'
  },
  copyWrapper: {
    alignItems: 'center',
    marginTop: 8,
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    marginBottom: 4,
    alignItems: 'center'
  },
  img: {
    width: 170, height: 170
  }
})
