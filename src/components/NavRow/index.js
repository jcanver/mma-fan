import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; // eslint-disable-line

import Text from 'src/components/Text'
import Touchable from 'src/components/Touchable'

export default function NavRow({ back, closeModal, label, noTopPadding }) {
  return (
    <View style={{ paddingTop: noTopPadding ? 0 : 20 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: theme.offWhite }}>
        <View style={{ width: 80 }}>
          {back ? (
            <Touchable onPress={() => back()} style={{ paddingHorizontal: 20}}>
              <View>
                <Ionicons name="ios-arrow-back" size={50} color={theme.primary} style={{ position: 'relative', top: 3 }} />
              </View>
            </Touchable>
          ) : null}
        </View>
        <View style={{ flex: 1 }}>
          <Text fontSize={20} semiBold centered>{label}</Text>
        </View>
        <View style={{ width: 80, justifyContent: 'center', alignItems: 'flex-end' }}>
          {closeModal ? (
            <Touchable onPress={closeModal} style={{ paddingHorizontal: 20}}>
              <View>
                <Ionicons name="ios-close" size={60} color={theme.primary} style={{ position: 'relative', top: 3 }} />
              </View>
            </Touchable>
          ) : null}
        </View>
      </View>
    </View>
  )
}
