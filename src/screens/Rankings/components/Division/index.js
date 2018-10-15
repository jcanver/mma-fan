import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from 'src/theme'

import Heading from 'src/components/Heading'
import Label from 'src/components/Label'
import Icon from 'src/components/Icon'
import Champ from './components/Champ'
import TopFive from './components/TopFive'

class Division extends React.PureComponent {
  state = {
    champInfo: null,
    rankingsInfo: null
  }

  componentDidMount() {
    this.getFighterInfo()
  }

  getFighterInfo = () => {
      const champInfo = this.getFighter(this.props.champ.name)
      const rankingsInfo = this.props.rankings.map(fighter => this.getFighter(fighter.name))

      this.setState({ champInfo, rankingsInfo })
  }

  getFighter = (fighterName) => this.props.fighters.filter((fighter) => `${fighter.first_name} ${fighter.last_name}` === fighterName)[0]

  render() {
    const { champInfo, rankingsInfo } = this.state
    const { division, divisionKey, showTopFifteen } = this.props

    return (
      <View>
        <Heading
          color="offWhite"
          semiBold
          centered
          wrapperStyle={{ backgroundColor: theme.gold, width: '100%', paddingTop: 14, paddingBottom: 10 }}
        >
          {division.toUpperCase()}
        </Heading>
        <View style={styles.row}>
          <View style={{ width: '40%'}}>
            <View style={styles.heading}>
              <Icon name="beltFilled" fill="gold" width={20} height={20} style={{ marginRight: 8 }} />
              <Label centered bold color="gold">CHAMPION</Label>
            </View>
            {champInfo && (
              <Champ
                firstName={champInfo.first_name}
                lastName={champInfo.last_name}
                imageSrc={champInfo.belt_thumbnail}
                record={`${champInfo.wins}-${champInfo.losses}-${champInfo.draws}`}
              />
            )}
          </View>
          <View style={{ width: '58%' }}>
            <View style={styles.heading}>
              <Label centered bold color="mediumGray">CHALLENGERS</Label>
            </View>

            {rankingsInfo && (
              <TopFive
                division={division}
                divisionKey={divisionKey}
                fighters={rankingsInfo}
                showTopFifteen={showTopFifteen}
              />
            )}
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10
  },
  heading: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: theme.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Division
