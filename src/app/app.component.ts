import { Component } from '@angular/core';
import { findPhone } from 'find-phone-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  phoneList = [];

  searchPhone(searchString) {
    this.phoneList = [];
    this.phoneList = findPhone(searchString);
  }
}
