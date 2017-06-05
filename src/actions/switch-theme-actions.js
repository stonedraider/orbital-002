import * as types from './action-types';

export const switchTheme = (themeId) => {
  return {
    type: types.SWITCH_THEME,
    themeId: themeId
  }
}