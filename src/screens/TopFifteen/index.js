import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native'
import theme from 'src/theme'

import NavRow from 'src/components/NavRow'
import Row from './components/Row'
import FighterWebView from './components/FighterWebView'
import mapToProps from './mapToProps'

export class TopFifteen extends React.PureComponent {
  render() {
    const { division, fighter, fighters, setFighter } = this.props

    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <NavRow
              noTopPadding
              back={this.props.navigation.goBack}
              label={division}
            />
            {fighters ? fighters.map((fighter, index) => (
              <Row
                rank={index}
                key={`${fighter.first_name}----${fighter.last_name}${index}`}
                name={`${fighter.first_name} ${fighter.last_name}`}
                record={`${fighter.wins}-${fighter.losses}-${fighter.draws}`}
                imageSrc={fighter.profile_image}
                onPress={() => setFighter(fighter.id)}
              />
            )) : null}
          </View>
        </ScrollView>
        <FighterWebView
          fighter={fighter}
          closeModal={() => setFighter('')}
        />
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

export default mapToProps(TopFifteen)
