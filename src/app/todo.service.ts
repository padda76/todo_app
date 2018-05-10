import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { UUID } from 'angular2-uuid';

@Injectable()
export class TodoService {

  result: any;
  constructor(private http: HttpClient) {}

  baseUri = 'https://jsonplaceholder.typicode.com/todos/';
  //baseUri = 'http://localhost:49811/api/todo/';

  addTodo(todo) {
    const uri = this.baseUri;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    //api sets Id
    const obj = {
      title: todo,
      completed: false,
      userId: 1000
    };
    console.log(obj);
    this.http.post(uri, obj, httpOptions ).subscribe(res =>
      console.log("Added " + res.title));
    
    return true;
  }

  getTodos() {
    const uri = this.baseUri;
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  editTodo(id) {
    const uri = this.baseUri + id;
    return this.http.get(uri).map(res => {
      return res;
    });
  }

  updateTodo(title, completed, id) {
    const uri = this.baseUri + id;

    const obj = {
      title,
      completed
    };
    this.http.put(uri, obj).subscribe(res => console.log('Edited ' + title));
  }

  deleteTodo(id) {
    const uri = this.baseUri + id;

    return this.http.delete(uri).map(res => {
      return res;
    });
  }
}
