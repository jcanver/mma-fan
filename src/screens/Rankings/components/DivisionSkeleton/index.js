import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from 'src/theme'

import Heading from 'src/components/Heading'
import Label from 'src/components/Label'
import Icon from 'src/components/Icon'
import Champ from './components/Champ'
import TopFive from './components/TopFive'

class DivisionSkeleton extends React.PureComponent {
  render() {
    const { division } = this.props;
    return (
      <View>
        <Heading
          color="offWhite"
          semiBold
          centered
          wrapperStyle={{ backgroundColor: theme.gold, width: '100%', paddingTop: 14, paddingBottom: 10 }}
        >
          {division}
        </Heading>
        <View style={styles.row}>
          <View style={{ width: '40%'}}>
            <View style={styles.heading}>
              <Icon name="beltFilled" fill="gold" width={20} height={20} style={{ marginRight: 8 }} />
              <Label centered bold color="gold">CHAMPION</Label>
            </View>

            <Champ />
          </View>
          <View style={{ width: '58%' }}>
            <View style={styles.heading}>
              <Label centered bold color="mediumGray">CHALLENGERS</Label>
            </View>

            <TopFive
              division={division}
            />
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

export default DivisionSkeleton
