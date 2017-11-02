import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit { 
  title = 'app';

  // public loading = loadingService;
  
  public constructor(private router: Router) {
  }
  
  ngOnInit() {
    // Move para o topo da janela após mudança nas rotas (uma nova página é aberta)
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
  }