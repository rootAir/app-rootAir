import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>  
    <app-menu></app-menu>
  `,
})
export class AppComponent implements OnInit { 
  title = 'app';

  ngOnInit(): void {
    
  }
}