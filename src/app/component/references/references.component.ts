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
        title: "Tchibo-Projekt Einblick",
        description: "Dieser Artikel bietet einen detaillierten Einblick in die erfolgreiche Zusammenarbeit zwischen unserem Unternehmen und Tchibo. Erfahren Sie mehr über die Herausforderungen, Strategien und den gemeinsamen Erfolg in diesem spannenden Projekt.",
     },
    {
        img: "references-helm.png",
        title: "Helm-Design Innovation",
        description: "Entdecken Sie, wie unsere Partnerschaft mit Helm Innovations zu bahnbrechenden Veränderungen im Design und in der Sicherheit von Helmen geführt hat. Dieser Artikel beleuchtet die kreativen Prozesse und technologischen Durchbrüche, die wir gemeinsam erreicht haben.",
    },
    {
        img: "references-hh.jpeg",
        title: "Architektur Highlights HH",
        description: "Tauchen Sie ein in die Welt der Architektur und entdecken Sie unsere Arbeit an einigen der beeindruckendsten Gebäude Hamburgs. Dieser Artikel gibt Einblicke in die Planung, Umsetzung und die künstlerische Vision hinter diesen Projekten.",
    }
];


}
