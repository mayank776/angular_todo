import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css'],
})
export class ToDosComponent implements OnInit {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 3,
        title: 'title',
        desc: 'description',
        active: true,
      },
      {
        sno: 5,
        title: 'second title',
        desc: 'description again',
        active: true,
      },
      {
        sno: 1,
        title: 'original title',
        desc: 'description always',
        active: false,
      },
    ];
  }

  ngOnInit(): void {}

  deleteTodo(todo: Todo) {
    console.log(todo);
    let index = this.todos.indexOf(todo);

    this.todos.splice(index, 1);
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
  }
}
