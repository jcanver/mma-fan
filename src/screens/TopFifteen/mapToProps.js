import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectDivision, makeSelectTopFifteen, makeSelectFighter } from 'src/redux/selectors/rankings'
import { setFighter } from 'src/redux/actions/rankings'

const mapStateToProps = createStructuredSelector({
  division: makeSelectDivision(),
  fighters: makeSelectTopFifteen(),
  fighter: makeSelectFighter()
})

const mapDispatchToProps = dispatch => ({
  setFighter: (fighterId) => dispatch(setFighter(fighterId))
})

export default connect(mapStateToProps, mapDispatchToProps)
