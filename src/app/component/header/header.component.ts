import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  static opened = false;

  constructor(public router: Router) {
    HeaderComponent.opened = false;
    document.getElementById("header")?.classList.add("hide")
  }

  toggleMenu() {
    if (HeaderComponent.opened) {
      document.getElementById("header")?.classList.add("hide")
    } else {
      document.getElementById("header")?.classList.remove("hide")
    }
    HeaderComponent.opened = !HeaderComponent.opened
    console.log(HeaderComponent.opened)
  }

  opened() {
    return HeaderComponent.opened;
  }
}
