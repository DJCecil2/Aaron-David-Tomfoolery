module.exports = `import { actions } from './App.constants';

const initialState = {
    backgroundColor: '#FFFFFF'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_BACKGROUND_COLOR:
            return { ...state, backgroundColor: action.color };
        default:
            return state;
    }
};

export { reducer }
`;
