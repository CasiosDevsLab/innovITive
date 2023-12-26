import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavElement } from 'src/app/model/navElement';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {


  navigationElements: NavElement[] = [
    {
      name: "Home",
      path: "/home",
    },
    {
      name: "Referenzen",
      path: "/references"
    },
    {
      name: "Leistungen",
      path: "/services"
    },
    {
      name: "Kontakt",
      path: "/contact"
    }
  ]

  constructor(public router: Router) { }

  closeMenu() {
    document.getElementById("header")?.classList.add("hide")
    HeaderComponent.opened = false
  }

}
