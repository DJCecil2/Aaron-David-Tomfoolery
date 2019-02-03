module.exports = `import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { reducer as AppReducer } from './App/App.reducer';

export default createStore(
  combineReducers({
    app: AppReducer
  }),
  applyMiddleware(
    ReduxThunk
  )
)
`;
