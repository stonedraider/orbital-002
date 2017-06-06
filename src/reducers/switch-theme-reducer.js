import * as types from '../actions/action-types';

const initialState = {theme:'white'};

export const SwitchThemeReducer = (state = initialState, action) => {
    // console.log(action.theme);
    switch (action.type) {
        case types.SWITCH_THEME:
            return action.theme;       
        default:
            return state;
    }
};

export default SwitchThemeReducer;