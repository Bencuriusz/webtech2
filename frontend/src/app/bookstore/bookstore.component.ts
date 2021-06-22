import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookstore',
  templateUrl: 'bookstore.component.html',
  styleUrls: ['bookstore.component.css']
})
export class BookstoreComponent implements OnInit {
  constructor(private ApiService: ApiService) { }


  panelOpenState = false;
  books: any[][] = [];

  ngOnInit(): void {
    this.ApiService.getAllBook().subscribe(
      response => {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          this.books[i] = response[i];
        }
      },
      error => {
        console.log(error);
      });
  }

  onSubmit(form: NgForm) {

  }
}
