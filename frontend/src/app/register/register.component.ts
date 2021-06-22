import { Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private ApiService: ApiService, private router: Router) { }

  success: string | undefined;

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value);
    this.ApiService.register(form.value.username, form.value.password)
      .subscribe(
        response => {
          console.log(response);
          this.success = "Registration was successful"
          this.router.navigate(["/login"]);
        },
        error => {
          console.log(error);
          this.success = "Registration was unsuccessful"
        });
  }
}
