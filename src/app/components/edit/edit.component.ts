import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from './../../todo.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  todo: any;
  angForm: FormGroup;
  title = 'Edit Todo';
  constructor(private route: ActivatedRoute, private router: Router, private service: TodoService, private fb: FormBuilder) {
    this.createForm();
   }

  createForm() {
    this.angForm = this.fb.group({
      todo: ['', Validators.required ]
   });
  }

  updateTodo(name) {
    this.route.params.subscribe(params => {
      this.service.updateTodo(name, this.todo.id);
      this.router.navigate(['index']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.todo = this.service.editTodo(params['id']).subscribe(res => {
        this.todo = res;
      });
    });
  }
}
