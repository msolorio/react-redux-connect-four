import * as actions from '../actions';

const initialState = {
  blackIsNext: true,
  board: Array(7).fill(Array(6).fill(''))
};

export default function gameReducer(state=initialState, action) {

  switch(action.type) {
    case actions.CLICK_SQUARE:

      // const boardClone = state.board.slice(0);
      //
      // // check if square is occupied do not update state
      // if (boardClone[action.index]) return state;
      //
      // boardClone[action.index] = state.blackIsNext ? 'black' : 'red';
      //
      // return Object.assign({}, state, {
      //   board: boardClone,
      //   blackIsNext: !state.blackIsNext
      // });
      console.log('in CLICK_SQUARE in reducer');
      return state;

    default:
      return state;
  }

};
