import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native'

import Division from './components/Division'
import DivisionSkeleton from './components/DivisionSkeleton'
import rankings from './rankings'
import mapToProps from './mapToProps'

class Rankings extends React.PureComponent {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    if (!this.props.allFighters) {
      // this.props.getFighters()
    }
  }

  render() {
    const { allFighters, showTopFifteen } = this.props

    logger.log(allFighters, 'HERE')

    return (
      <View style={styles.container}>
        <ScrollView>
          {allFighters ? Object.keys(rankings).map(key => (
            <Division
              key={key}
              division={rankings[key].division}
              divisionKey={key}
              champ={rankings[key].champ}
              rankings={rankings[key].rankings}
              fighters={allFighters}
              showTopFifteen={showTopFifteen}
            />
          )) : (
            <View>
              <DivisionSkeleton division="Men's Flyweight" />
              <DivisionSkeleton division="Men's Bantamweight" />
              <DivisionSkeleton division="Men's Featherweight" />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.white,
    flex: 1
  }
});

export default mapToProps(Rankings)
