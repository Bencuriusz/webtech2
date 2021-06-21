import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.ApiService.login(form.value.username, form.value.password)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}

