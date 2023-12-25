import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { Button } from 'src/app/model/button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  headerButton: Button = {
    text: "Jetzt anfragen",
    action: () => alert("Button funktioniert")
  }

  headerTitle: string = "Anfrage"
  headerDesc: string = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna"



  articles: Article[] = [
    {
      img: "test.jpg",
      title: "Überschrift 1",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna",
      path: "/projects",
      cta: "Erfahre mehr"
    },
    {
      img: "test2.jpg",
      title: "Überschrift 2",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna",
      path: "/projects",
      cta: "Erfahre mehr"
    },
    {
      img: "test3.jpg",
      title: "Überschrift 3",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna",
      path: "/projects",
      cta: "Erfahre mehr"
    }

  ]


}
