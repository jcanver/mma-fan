import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectAllFighters } from 'src/redux/selectors/rankings'
import { getFighters, setDivision, makeTopFifteen } from 'src/redux/actions/rankings'

const mapStateToProps = createStructuredSelector({
  allFighters: makeSelectAllFighters()
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getFighters: () => dispatch(getFighters()),
  showTopFifteen: (division, divisionKey) => {
    ownProps.navigation.navigate('TopFifteen')
    dispatch(setDivision(division))
    dispatch(makeTopFifteen(divisionKey))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)
