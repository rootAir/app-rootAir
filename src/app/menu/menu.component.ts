import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
//   styleUrls: ['./app.component.css']
})
export class MenuComponent {
  title = 'app';

  constructor(private router: Router) { }
  
  btnClick= function () {
      this.router.navigateByUrl('test');
  };

}