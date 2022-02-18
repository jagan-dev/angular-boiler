import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog:MatDialog ) { }

  ngOnInit() {
  }
  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'40%',
      height:'90%'
    });
}
}