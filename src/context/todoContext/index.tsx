import { createContext, FC , useReducer } from "react";
import { TodoType } from '../../types';
import {data} from "../../data"
import { Storage } from '../../utils';

export type TodoContextType = {
  dispatch: React.DispatchWithoutAction,
  state: {
    todos: TodoType[]
  }
}

type ReducerType = {
  todos: TodoType[]
}

const initialState:ReducerType = {
  todos: Storage.getItem("todos") || data
}

export enum ActionType {
    ADD_TODO_TASK,
    REMOVE_TODO_TASK,
    EDIT_TODO_TASK
}

type Action =
  | { type: ActionType.ADD_TODO_TASK; payload: TodoType }
  | { type: ActionType.REMOVE_TODO_TASK; payload: TodoType }
  | { type: ActionType.EDIT_TODO_TASK; payload: TodoType };

const todoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_TODO_TASK:
      {
        const newTodos:ReducerType = {
          ...state,
          todos: state.todos.map((todo: TodoType) => (todo.id == action.payload?.id) ? action.payload : todo)
        }
        Storage.setItem("todos", newTodos.todos)
        return newTodos
      }
    case ActionType.REMOVE_TODO_TASK:
      {
        const newTodos = {
          ...state,
          todos: state.todos.map((todo: TodoType) => (todo.id === action.payload?.id) ? action.payload : todo)
        }
        Storage.setItem("todos", newTodos.todos)
        return newTodos;
      }
    case ActionType.EDIT_TODO_TASK:
      {
        const newTodos = {
          ...state,
          todos: state.todos.map((todo: TodoType) => (todo.id === action.payload?.id) ? action.payload : todo)
        }
        Storage.setItem("todos", newTodos.todos)
        return newTodos
      }
    default:
      return state 
  }
}

export const TodosContext = createContext<TodoContextType | null>(null);

const TodoContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const[state, dispatch] =useReducer(todoReducer, initialState)

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodoContextProvider;

