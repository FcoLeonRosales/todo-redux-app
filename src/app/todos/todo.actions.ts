import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo.model';

export const crear = createAction(
  '[Todo] Crear Todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[Todo] Toggle Todo',
  props<{ id: number }>()
);

export const editar = createAction(
  '[Todo] Editar Todo',
  props<{ id: number, textoCambio: string }>()
);

export const eliminar = createAction(
  '[Todo] Eliminar Todo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[Todo] Toggle All Todo',
  props<{ completado: boolean }>()
);

export const limpiarCompletados = createAction(
  '[Todo] Limpiar Completdos',
);
