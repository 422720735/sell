import Types from '../../action/type';

const defaultState = {
    count: 0
};
export default function onAction(state = defaultState, action) {
    console.log(action);
    switch (action.type) {
        case Types.COUNTGOODS:
            return {
                ...state,
                index: action.index,
                count: action.count
            };
        default:
            return state;
    }
}