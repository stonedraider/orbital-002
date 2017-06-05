import * as types from '../actions/action-types';

const initialState = {themeId:'white'};

export const SwitchThemeReducer = (state = initialState, action) => {
    console.log(action.themeId);
    switch (action.type) {
        case types.SWITCH_THEME:
            return action.themeId;       
        default:
            return state;
    }
};

export default SwitchThemeReducer;