import * as types from './action-types';

export const switchThemeToBlack = (themeId) => {
  return {
    type: types.SWITCH_THEME_TO_BLACK,
    themeId
  };
}

export const switchThemeToWhite = (themeId) => {
  return {
    type: types.SWITCH_THEME_TO_WHITE,
    themeId
  };
}