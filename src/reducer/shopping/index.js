import Types from '../../action/type';

const defaultState = {
    count: 0
};
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.COUNTGOODS:
            return {
                ...state,
                count: action.count
            };
        default:
            return state;
    }
}