import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { UUID } from 'angular2-uuid';

@Injectable()
export class TodoService {

  result: any;
  constructor(private http: HttpClient) {}

  addTodo(todo) {
    const uri = 'https://jsonplaceholder.typicode.com/todos';
    const obj = {
      title: todo,
      completed: false,
      userId: 1000
      //id: UUID.UUID()
    };
    this.http.post(uri, obj).subscribe(res =>
      console.log(res));
      //Ta res og legg den til todos....
  }

  getTodos() {
    const uri = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  editTodo(id) {
    const uri = 'https://jsonplaceholder.typicode.com/todos/' + id;
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  updateTodo(name, id) {
    const uri = 'https://jsonplaceholder.typicode.com/todos/' + id;

    const obj = {
      title: name,
    };
    this.http.put(uri, obj).subscribe(res => console.log('Done'));
  }

  deleteTodo(id) {
    const uri = 'https://jsonplaceholder.typicode.com/todos/' + id;

    return this.http.delete(uri).map(res => {
      return res;
    });
  }
}
