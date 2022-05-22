import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() title: string = "App Header";
  @Input() logo: string = "assets/logohm.png";

  constructor() { }

  onToggleMenu(): void {
    document.querySelector('#menuAnimation')?.classList.toggle('active');
  }
}
