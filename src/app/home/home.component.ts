import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;

  data(){
     return "this is the"
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
