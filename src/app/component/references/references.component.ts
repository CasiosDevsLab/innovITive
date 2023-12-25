import { Component } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent {

articles: Article[] = [
    {
      img: "references-tchibo.png",
      title: "Überschrift 1",
      description: "Beschreibung für den Artikelnummer 1",
      path: "/home",
      cta: "Mehr erfahren"
    },
    {
      img: "references-helm.png",
      title: "Überschrift 2",
      description: "Beschreibung für den Artikelnummer 2",
      path: "/home",
      cta: "Mehr erfahren"
    },
    {
      img: "references-hh.jpeg",
      title: "Überschrift 2",
      description: "Beschreibung für den Artikelnummer 2",
      path: "/home",
      cta: "Mehr erfahren"
    }
]


}
