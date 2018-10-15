import React from 'react'
import { View } from 'react-native'

import Text from 'src/components/Text'
import Image from 'src/components/Image'
import Button from 'src/components/Button'

export default function TopFive({ fighters, division, divisionKey, showTopFifteen }) {
  return (
    <View>
      <View style={{ paddingVertical: 2}}>
        {fighters.map((fighter, index) => {
          const key = `${division}${index}`
          if (fighter && index < 5) {
            return (
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 2 }} key={key}>
                <View style={{ width: 30 }}>
                  <Text color="mediumGray"># {index + 1}</Text>
                </View>
                <View style={{ marginHorizontal: 4, width: 35, height: 35, borderWidth: 1, borderRadius: 50, overflow: 'hidden', borderColor: theme.border }}>
                  <Image source={{ uri: fighter.profile_image }} style={{ width: '100%', height: '100%' }} />
                </View>
                <View>
                  <Text fontSize={16}>{fighter.first_name} {fighter.last_name}</Text>
                  <View style={{ marginTop: 2 }}>
                    <Text fontSize={12} color="mediumGray">{fighter.wins}-{fighter.losses}-{fighter.draws}</Text>
                  </View>
                </View>
              </View>
            )
          }
          return <View key={key} />
        }
      )}
      </View>
      <View style={{ marginTop: 8, marginBottom: 20 }}>
        <Button
          title="TOP 15"
          onPress={() => showTopFifteen(division, divisionKey)}
          width={100}
        />
      </View>
    </View>
  )
}
