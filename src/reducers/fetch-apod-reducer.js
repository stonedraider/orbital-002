import * as types from '../actions/action-types';

const initialState = {themeId:'white'};

export const FetchApodReducer = (state = initialState, action) => {
    // console.log(action.date);
    switch (action.type) {
        case types.FETCH_APOD:
            return action.themeId;       
        default:
            return state;
    }
};

export default FetchApodReducer;