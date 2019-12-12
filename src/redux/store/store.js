import { createStore } from 'redux';
import reducers from '../reducers';
import { createTodo, updateTodo, removeTodo, createEvent } from '../actions'

const store = createStore(reducers);


store.subscribe(() => {
  const state = store.getState()
  console.log("#AR: state", state);
})

store.dispatch(createTodo({ id: 1, todo: 'learn JS' }))
store.dispatch(createTodo({ id: 2, todo: 'learn react' }))

store.dispatch(createEvent({ id: 1, event: 'JS conf Armenia' }))

setTimeout(() => {
  store.dispatch(updateTodo({ id: 1, todo: 'learn JS and React' }))
}, 1500);

setTimeout(() => {
  store.dispatch(removeTodo(2))
}, 2500);