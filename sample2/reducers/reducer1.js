import sample from '../sample.json'
const Reducer1 = (state = 0, action) => {
    switch (action.type) {
        case 'Tab_State':
            return Object.assign({}, state, {
                tabIndex: action.text,
                datas : sample.items[action.text]
            });
        default:
            return Object.assign({}, state, {
                tabIndex: 0,
                datas : sample.items[0]
            });
    }
}

export default Reducer1