import { connect } from 'react-redux'
import { TabState } from '../actions'
import InitButton from '../components/InitButton'

const initButtonProps = (dispatch) => {
    return {
        onInitClick: () => {
            console.log("dispatch", dispatch)
            dispatch(TabState(0))
        }
    }
}

const InitTabState = connect(
    undefined,
    initButtonProps
)(InitButton)

export default InitTabState