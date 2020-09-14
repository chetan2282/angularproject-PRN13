import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { FormGroup, FormControl } from "@angular/forms";
@Component({
  selector: 'app-userlog',
  templateUrl: './userlog.component.html',
  styleUrls: ['./userlog.component.css']
})
export class UserlogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  userForm = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl(''),
  });
  ngOnInit(): void {
  }
  usLogin()
  {
    console.warn(this.userForm.value);
  }
}
