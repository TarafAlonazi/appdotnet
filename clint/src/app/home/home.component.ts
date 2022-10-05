import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registermode = false;


  constructor() { }

  ngOnInit(): void {
  }

  registertoggel(){
    this.registermode = !this.registermode;
  }

  
  cancelRegisterMode(event: boolean){
    this.registermode = event ; 
  }




}
