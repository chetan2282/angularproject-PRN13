import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {


  constructor(public dialog: MatDialog,private _snackBar: MatSnackBar) { }
  regForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    cno: new FormGroup({
    pass: new FormControl(''),
    pass1: new FormControl(''),
     })
  });
  ngOnInit(): void {
  }
  sigUp()
  {
    console.warn(this.regForm.value);
  }
onsub()
{
 alert("Registration Successful");
}


}
