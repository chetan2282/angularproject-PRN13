import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { AdminlogComponent } from '../adminlog/adminlog.component';
import { UserlogComponent } from "../userlog/userlog.component";
import { RegComponent } from "../reg/reg.component";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  adminLogin(){
    const dialogRef = this.dialog.open(AdminlogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');

    });
  }
  userLogin(){
    const dialogRef = this.dialog.open(UserlogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');

    });
  }
  signUp(){
    const dialogRef = this.dialog.open(RegComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ${result}');

    });
  }
  ngOnInit(): void {
  }

}
