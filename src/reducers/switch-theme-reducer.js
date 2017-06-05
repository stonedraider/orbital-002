import * as types from '../actions/action-types';

export default (state = [], action) => {
    switch (action.type) {
        case types.SWITCH_THEME_TO_BLACK:
            return [...state, Object.assign({}, action.theme)];
        case types.SWITCH_THEME_TO_WHITE:
            return [...state, Object.assign({}, action.theme)];
        default:
            return state;
    }
};