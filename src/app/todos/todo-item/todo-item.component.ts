import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from './../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input('todo') todo: Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  public chkcompletado: FormControl;
  public txtInput: FormControl;
  public editando: boolean = false;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.chkcompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.chkcompletado.valueChanges.subscribe(() => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto) { return; }

    this.store.dispatch(actions.editar({ id: this.todo.id, textoCambio: this.txtInput.value }));
  }

  eliminar() {
    this.store.dispatch(actions.eliminar({id: this.todo.id}));
  }

}
