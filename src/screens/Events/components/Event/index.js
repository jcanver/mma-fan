import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import moment from 'moment'

import Text from 'src/components/Text'

export default function Event({ event }) {
  return (
    <View style={styles.wrapper}>
      {event.feature_image ? (
        <Image
          source={{ uri: event.feature_image }}
          style={styles.image}
        />
      ) : null}
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text bold color="offWhite">{event.base_title}</Text>
        <Text color="offWhite" fontSize={24} style={{ marginVertical: 8 }}>{event.title_tag_line}</Text>
        <Text color="offWhite">{event.subtitle}</Text>
        <Text color="offWhite">{moment(event.event_date).format('dddd, MMMM D')}</Text>
        <Text color="offWhite">{event.event_time_text} {event.event_time_zone_text}</Text>
      </View>

      <View style={styles.bottomBorder} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    height: 241
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 240,
    width: '100%'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 240,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  content: {
    padding: 30
  },
  bottomBorder: {
    position: 'absolute',
    backgroundColor: theme.offWhite,
    bottom: 0,
    left: 0,
    width: '100%',
    height: 1
  }
})
