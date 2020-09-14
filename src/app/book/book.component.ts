import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sign()
  {
    
  }
  log()
  {
    alert("HEllo");
  }
  admin()
  {
    alert("How are you??");
  }
}
