import { Pipe, PipeTransform } from '@angular/core';

import { Todo } from './models/todo.model';
import { filtrosValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodos'
})
export class FiltroPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtrosValidos): Todo[] {
    let todosReturn: Todo[] = [];
    switch (filtro) {
      case "activos":
        todosReturn = todos.filter(todo => !todo.completado);
        break;
      case "completados":
        todosReturn = todos.filter(todo => todo.completado);
        break;

      default:
        todosReturn = todos;
        break;
    }
    return todosReturn;
  }

}
