import { base, darkTheme, lightTheme, colorOptions } from './theme';

const initialState = {theme: { ...base, ...lightTheme, ...colorOptions.pink }};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION_TYPE':
      return;
    default:
      return state;
  }
};

export default themeReducer;