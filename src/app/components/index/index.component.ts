import { TodoService } from './../../todo.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  todos: any;

  constructor(private http: HttpClient, private service: TodoService) {}

  ngOnInit() {
    this.waitAndGetTodos();
  }

  waitAndGetTodos(){
    setTimeout(() => {
      this.getTodos();
    },500)
  }

  getTodos() {
    this.service.getTodos().subscribe(res => {
      this.todos = res;
    });
  }

  deleteTodo(id) {
    this.service.deleteTodo(id).subscribe(res => {
      console.log('Deleted id '+id);
    });
    this.waitAndGetTodos();
  }

  toggleComplete(title,completed,id){
    this.service.updateTodo(title,!completed,id);
    this.waitAndGetTodos();
  }
}
