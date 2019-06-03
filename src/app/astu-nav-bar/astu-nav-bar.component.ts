import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-astu-nav-bar',
  templateUrl: './astu-nav-bar.component.html',
  styleUrls: ['./astu-nav-bar.component.css']
})
export class AstuNavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(unknown: any){
    console.log(unknown);
  }

}
