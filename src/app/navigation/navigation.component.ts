import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navigationElements:Array<any> = [
    {
      name: "Home",
      path: "/home",
      description: "",
      subelements: [{
        
      }]
    },
      {
        name: "Projekte",
        path: "/projects",
        description: "Hier findest Du die Projekte, die wir bereits abgeschlossen haben",
        subelements: [{
          
        }]
      },
      {
        name: "Für Unternehmen",
        path: "/business",
        description: "Hier findest du Informatioen zu unseren Next Steps zu einem erfolgreichen gemeinsamen Projekt.",
        subelements: [{
          
        }]
      },
      {
        name: "Für Studierende",
        path: "/students",
        description: "Hier findest du als Student interessante Informationen über deine Vorteile und wie du Teil von uns wirst.",
        subelements: [{
          
        }]
      },
      {
        name: "Über uns",
        path: "/about",
        description: "Hier erfährst du mehr über uns und unsere Werte.",
        subelements: [{
          
        }]
      }
  ]

}
