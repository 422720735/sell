import Types from '../../action/type';

const defaultState = {};
export default function onAction(state = defaultState, action) {
    console.log(action);
    switch (action.type) {
        case Types.GOTOGOODDETAil:
            return {
                ...state,
                index: 11,
            };
        default:
            return state;
    }
}