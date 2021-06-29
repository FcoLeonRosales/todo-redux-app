import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './../../app.reducer';
import { Todo } from './../models/todo.model';
import { filtrosValidos, setFiltro } from '../../filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit {

  public filtroActual: filtrosValidos = 'todos';
  public filtros: filtrosValidos[] = ['todos', 'completados', 'activos'];
  private todos: Todo[] = [];

  public pendientes: number = 0;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro;
      this.todos = state.todos;
      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });
  }

  cambioFiltro(filtro: filtrosValidos) {
    // console.log(filtro);
    // cuando el nombre del objeto es igual al nombre de la variable ej:(filtro: filtro) se piede dejar 1 solo
    this.store.dispatch(setFiltro({ filtro }));
  }

  limpiarCompletados() {
    this.store.dispatch(limpiarCompletados());
  }

}
