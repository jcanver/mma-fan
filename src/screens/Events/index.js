import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { getEvents } from 'src/redux/actions/events'
import { makeSelectEvents } from 'src/redux/selectors/events'

import Event from './components/Event'

class Events extends React.PureComponent {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    this.props.getEvents()
  }

  render() {
    const { events } = this.props

    return (
      <View style={styles.container}>
        <ScrollView>
          {events && events.map((event, index) => {
            if (event.base_title !== 'UFC Fight Night' && event.base_title !== 'Tuesday Night Contender Series' && index < 100) {
              return (
                <Event
                  key={index}
                  event={event}
                />
              )
            }
            return null
          }
          )}
        </ScrollView>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapStateToProps = createStructuredSelector({
  events: makeSelectEvents()
})

const mapDispatchToProps = dispatch => ({
  getEvents: () => dispatch(getEvents())
})

export default connect(mapStateToProps, mapDispatchToProps)(Events)
