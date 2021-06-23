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

  books: any[] = [];
  condition;

  ngOnInit(): void {
    this.getBooks();
  }
  getBooks() {
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

  onUpdate(form: NgForm) {
    this.ApiService.editBook(form.value.title, form.value.author, form.value.description, this.condition)
      .subscribe(
        response => {
          console.log(response);
          this.getBooks();
        },
        error => {
          console.log(error);
        });
  }

  Edit(book) {
    this.condition = book._id;
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
