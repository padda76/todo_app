import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../todo.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Todo';
  angForm: FormGroup;

  constructor(private service: TodoService, private fb: FormBuilder, private router: Router) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      todo: ['', Validators.required ]
   });
  }

  addTodo(name) {
      this.service.addTodo(name);
      this.router.navigate(['index']);
  }

  ngOnInit() {
  }
}
