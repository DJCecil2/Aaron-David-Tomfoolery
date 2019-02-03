module.exports = `import { actions, getRandomColor } from './App.constants';

/**
 * Dispatcher for setting the background color
 * @returns {function(*): *}
 */
export const setRandomBgColor = () => dispatch =>
    dispatch({ type: actions.SET_BACKGROUND_COLOR, color: getRandomColor() });
`;
