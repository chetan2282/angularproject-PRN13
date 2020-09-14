import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: 'app-adminlog',
  templateUrl: './adminlog.component.html',
  styleUrls: ['./adminlog.component.css']
})
export class AdminlogComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }
  adminForm = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl(''),
  });
  ngOnInit(): void {
  }
  adLogin()
  {
    console.warn(this.adminForm.value);
  }
 
}
