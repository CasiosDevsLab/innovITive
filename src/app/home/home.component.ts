import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  articles: Array<any> = [
    {
      header: "Überschrift 1",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna",
      path: "/projects",
      cta: "Erfahre mehr"
    },
    {
      header: "Überschrift 2",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna",
      path: "/projects",
      cta: "Erfahre mehr"
    },
    {
      header: "Überschrift 3",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna",
      path: "/projects",
      cta: "Erfahre mehr"
    }

  ]


  constructor(private router: Router) { }

  navigateTo(path: any) {
    this.router.navigateByUrl(path)
  }

}
