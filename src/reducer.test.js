import * as types from './actions';
import * as actions from './actions';
import reducer from './reducer';

describe('CREATE_TODO', () => {
  test('creates a new todo and increment nextId', () => {
    const initialState = {todos: [], nextId: 1, filter: 'all'};
    const state = reducer(initialState, actions.createTodo("Test"));
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0]).toEqual({id: 1, done: false, text:"Test"});
    expect(state.nextId).toEqual(2);
  })
})

describe('TOGGLE_TODO', () => {
  test('toggles todo.done of selected todo (true/false)', () => {
    const initialState = {todos: [{id: 1, done: false, text:'Test'}]};
    const state = reducer(initialState, actions.toggleTodo(1));
    expect(state.todos[0]).toEqual({id: 1, done: true, text: 'Test'})
  })
})

describe('FILTER_TODOS', () => {
  test('filters todo based on filterType', () => {
    const initialState = {todos: [{id: 1, done: true, text: 'Test'}], nextId: 2, filter: 'all'};
    const state = reducer(initialState, actions.filterTodos('completed'));
    expect(state.filter).toEqual('completed')
  })
})
