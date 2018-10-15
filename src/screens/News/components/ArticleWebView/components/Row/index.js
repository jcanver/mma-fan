import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from 'src/theme'

import Text from 'src/components/Text'
import Image from 'src/components/Image'
import Icon from 'src/components/Icon'

export default function Row({ rank, name, record, imageSrc }) {
  const champ = rank === 0
  return (
    <View style={styles.wrapper}>
      <View style={{ flexDirection: 'row', paddingVertical: 2}}>
        <View style={{ width: 60, alignItems: 'center' }}>
          {champ ? (
            <Icon name="beltFilled" fill={theme.gold} />
          ) : (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text color="mediumGray">#</Text>
              <Text fontSize={30} color="mediumGray">{rank}</Text>
            </View>
          )}
        </View>
        <View>
          <Text fontSize={24} color={champ ? 'gold' : 'primary'}>{name}</Text>
          <Text bold color={champ ? 'gold' : 'primary'}>{record}</Text>
        </View>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageSrc }} style={styles.img} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: theme.border
  },
  imageWrapper: {
    width: 85,
    height: 85,
    borderRadius: 100,
    backgroundColor: theme.offWhite,
    borderWidth: 1,
    borderColor: theme.border,
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: '100%'
  }
})
