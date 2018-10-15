import React from 'react'
import { View, StyleSheet } from 'react-native'

import Text from 'src/components/Text'
import Image from 'src/components/Image'

export default function Champ({ firstName, lastName, imageSrc, record }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.copyWrapper}>
        <View style={styles.name}>
          <Text fontSize={22} color="gold">{firstName}</Text>
          <Text fontSize={22} color="gold">{lastName}</Text>
        </View>
        <Text
          fontSize={14}
          color="gold"
          bold
        >
          {record}
        </Text>
      </View>
      <Image
        source={{ uri: imageSrc }}
        style={styles.img}
      />
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
