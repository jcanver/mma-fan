import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native'

import Division from './components/Division'
import rankings from './rankings'
import mapToProps from './mapToProps'

class Rankings extends React.PureComponent {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    if (!this.props.allFighters) {
      this.props.getFighters()
    }
  }

  render() {
    const { allFighters, showTopFifteen } = this.props

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
          )) : null}
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
