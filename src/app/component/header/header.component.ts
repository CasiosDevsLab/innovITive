import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  opened = false;

  constructor(public router: Router) {}

  toggleMenu() {
    if (this.opened) {
      document.getElementById("header")?.classList.add("hide")
    } else {
      document.getElementById("header")?.classList.remove("hide")
    }

    
    this.opened = !this.opened
  }
}
