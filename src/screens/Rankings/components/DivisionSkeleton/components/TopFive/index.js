import React from 'react'
import { View } from 'react-native'
import { Svg } from 'expo'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'

import Text from 'src/components/Text'
// import Icon from 'src/components/Icon'
// import Button from 'src/components/Button'

const count = [null, null, null, null, null];

const height = 44

export default function TopFive({ division }) {
  return (
    <View>
      <View style={{ paddingVertical: 2}}>
        {count.map((c, index) => {
          const key = `${division}${index}`
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 2 }} key={key}>
              <View style={{ width: 30 }}>
                <Text color="mediumGray"># {index + 1}</Text>
              </View>

              <View style={{ position: 'relative', height }}>
                <View style={{ position: 'absolute', top: 0, left: 0 }}>
                  <SvgAnimatedLinearGradient
                    height={height}
                  >
                    <Svg.Circle y="0" x="2" cx="16" cy="22" r="16" />
                    <Svg.Rect x="42" y="32" rx="4" ry="4" width="30" height="8" />
                  </SvgAnimatedLinearGradient>
                </View>
                <View style={{ position: 'absolute', top: 0, left: 0 }}>
                  <SvgAnimatedLinearGradient
                    height={height}
                    primaryColor="#869b9d"
                    secondaryColor={theme.primary}
                    >
                    <Svg.Rect x="42" y="14" rx="4" ry="4" width="80" height="10" />
                  </SvgAnimatedLinearGradient>
                </View>
              </View>
            </View>
          )
        }
      )}
      </View>
      <View style={{ marginTop: 8, marginBottom: 20 }}>
        <SvgAnimatedLinearGradient
          height={52}
          primaryColor="#869b9d"
          secondaryColor={theme.primary}
          >
          <Svg.Rect x="8" y="8" rx="10" ry="10" width="100" height="36" />
        </SvgAnimatedLinearGradient>
      </View>
    </View>
  )
}
