import { Component } from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent {

  inputs:any = [
    {
      header: "Haftungsausschluss:",
      value: "Die Autoren übernehmen keine Haftung für die Aktualität, die inhaltliche Richtigkeit sowie für die Vollständigkeit der in ihrem Webangebot eingestellten Informationen, es sei denn die Fehler wurden vorsätzlich oder grob fahrlässig aufgenommen. Die Autoren behalten es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen. Von den Inhalten verlinkter externer Seiten distanzieren wir uns ausdrücklich."
    },
    {
      header: "Urheberrecht:",
      value: "Das Urheberrecht für veröffentlichte, von den Autoren selbst erstellten Objekten bleibt allein bei den Autoren der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des jeweiligen Autors nicht gestattet."
    },


  ]


}
