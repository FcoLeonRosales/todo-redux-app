import { createReducer, on } from '@ngrx/store';

import * as actions from './todo.actions';
import { Todo } from './models/todo.model';

export const estadoInicial: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('hola'),
  new Todo('como'),
  new Todo('estas'),
  new Todo('ctm'),
];

const _todoReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, { id }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.editar, (state, { id, textoCambio }) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          texto: textoCambio
        }
      } else {
        return todo;
      }
    });
  }),
  on(actions.eliminar, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(actions.limpiarCompletados, (state) => state.filter(todo => !todo.completado)),
  on(actions.toggleAll, (state, { completado }) => state.map(todo => { return { ...todo, completado: completado } })),
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
