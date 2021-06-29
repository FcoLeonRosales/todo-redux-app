import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos' | 'activos' | 'completados';

export const setFiltro = createAction(
  '[Filtro] Set Filtro',
  props<{ filtro: filtrosValidos }>()
);
