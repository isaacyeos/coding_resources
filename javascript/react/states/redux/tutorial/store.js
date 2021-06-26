import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({   // ensures state is not mutated
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;    // okay to mutate this way as toolkit will auto clone existing state
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

// create map of reducers
const store = configureStore({
  // reducer: {counter: counterSlice.reducer}    // for bigger apps
  reducer: counterSlice.reducer
});


export const counterActions = counterSlice.actions   // create action objects which have unique identifier type property
export default store;


// dont have to copy existing state with toolkit
// const counterReducer = (initialState, action) => {
//   if (action.type === 'INCREMENT') {
//     return {
//       counter: state.counter + action.payload
//     };
//   }
  
//   if (action.type === 'DECREMENT') {
//     return {
//       counter: state.counter - 1
//     };
//   }
// }


// // subscriber
// const counterSubscriber = () => {
//   store.getState();
// }

// // actions
// store.dispatch({type: 'INCREMENT'});
// store.dispatch({type: 'DECREMENT'});
