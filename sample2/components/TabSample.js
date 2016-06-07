import { connect } from 'react-redux'
import { TabState } from '../actions'
import TabList from './TabList'

const mapStateToProps = (state) => {
    //console.log("mapStateToProps - state", state)
    return {
        tabState: state.Reducer1.tabIndex,
        datas : state.Reducer1.datas,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTabClick: (tabIndex) => {
            dispatch(TabState(tabIndex))
        }
    }
}

const TabSample = connect(
    mapStateToProps,
    mapDispatchToProps
)(TabList)

export default TabSample