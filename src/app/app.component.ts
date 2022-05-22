import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { fadeInAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
})
export class AppComponent {
  title = 'SideMenu Boilerplate';
  logo = 'assets/logohm.png';

  private rawPages = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/showcase",
    "/terms-and-conditions",
    "/privacy-policy"
  ];

  constructor(public router: Router) {  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute.snapshot.url : null;
  }

  checkRawPages(url: string) {
    return !this.rawPages.some(page => url.includes(page) === true);
  }
}
