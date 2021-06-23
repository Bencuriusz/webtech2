import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-bookstore',
  templateUrl: 'bookstore.component.html',
  styleUrls: ['bookstore.component.css']
})
export class BookstoreComponent implements OnInit {
  book: any;
  constructor(private ApiService: ApiService) { }

  books: any[] = [];
  modify = false;

  ngOnInit(): void {
    this.ApiService.getAllBook().subscribe(
      response => {
        console.log(response);
        for (let i = 0; i < response.length; i++) {
          this.books[i] = response[i];
        }
        console.log(this.books);
      },
      error => {
        console.log(error);
      });
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.ApiService.createBook(form.value.title, form.value.author, form.value.description)
      .subscribe(
        response => {
          console.log(response);
          this.books.push(response);
        },
        error => {
          console.log(error);
        });
  }

  Edit(book) {
    this.modify = true;
    book._id
  }

  Delete(book) {
    this.ApiService.deleteBook(book._id).
      subscribe(
        response => {
          console.log(response);
          this.books.splice(this.books.indexOf(book), 1)
        },
        error => {
          console.log(error);
        });
  }
}
