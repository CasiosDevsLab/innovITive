import { Component } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  articles: Article[] = [
    {
      title: "Überschrift 1",
      description: "Beschreibung für den Artikelnummer 1",
      path: "/home",
      cta: "Mehr erfahren"
    },
    {
      title: "Überschrift 2",
      description: "Beschreibung für den Artikelnummer 2",
      path: "/home",
      cta: "Mehr erfahren"
    },
    {
      title: "Überschrift 2",
      description: "Beschreibung für den Artikelnummer 2",
      path: "/home",
      cta: "Mehr erfahren"
    }
]
}
