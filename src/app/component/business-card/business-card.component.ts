import { Component } from '@angular/core';
import { Consultant } from 'src/app/model/consultant';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent {

  consultant: Consultant = {
    firstname: "Enrik",
    lastname: "Hiller",
    img: "enrikhiller.png",
    role: "Consultant",
    contact: {
      mail: "Enrik.Hiller@innovITive.de",
      mobile: "+49 176 49450720",
      linkedin: {
        alt: "Enrik Hiller",
        src: "https://www.linkedin.com/in/enrik-hiller-3a2095208/"
      }
    }
  }
}
