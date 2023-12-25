import { Component, Input } from '@angular/core';
import { Consultant } from 'src/app/model/consultant';

@Component({
  selector: 'app-consultant-team',
  templateUrl: './consultant-team.component.html',
  styleUrls: ['./consultant-team.component.scss']
})
export class ConsultantTeamComponent {

  consultants: Consultant[] = [
    {
      firstname: "Enrik",
      lastname: "Hiller",
      img: "enrikhiller.png",
      role: "Consultant",
      experiences: [{
        title: "Projekt Z",
        description: "Lorem ipsum set dolor et amat."
      },
      {
        title: "Projekt Z",
        description: "Lorem ipsum set dolor et amat."
      }],
      contact: {
        mail: "Enrik.Hiller@innovITive.de",
        mobile: "+49 176 49450720",
        linkedin: {
          alt: "LinkedIn",
          src: "https://www.linkedin.com/in/enrik-hiller-3a2095208/"
        }
      }
    },



    {
      firstname: "Lennart",
      lastname: "Behrendt",
      img: "lennartbehrendt.png",
      role: "Consultant",
      experiences: [{
        title: "Projekt 23",
        description: "Lorem ipsum set dolor et amat."
      }],
      contact: {
        mail: "Lennart.Behrendt@innovITive.de",
        mobile: "+49 151 345234124",
        linkedin: {
          alt: "LinkedIn",
          src: ""
        }
      }
    },



    {
      firstname: "Enrik",
      lastname: "Hiller",
      img: "enrikhiller.png",
      role: "Consultant",
      experiences: [{
        title: "Proejkt X",
        description: "Lorem ipsum set dolor et amat."
      }],
      contact: {
        mail: "Enrik.Hiller@innovITive.de",
        mobile: "+49 176 49450720",
        linkedin: {
          alt: "LinkedIn",
          src: "https://www.linkedin.com/in/enrik-hiller-3a2095208/"
        }
      }
    },
    {
      firstname: "Enrik",
      lastname: "Hiller",
      img: "enrikhiller.png",
      role: "Consultant",
      experiences: [{
        title: "Projekt 1",
        description: "Lorem ipsum set dolor et amat."
      }],
      contact: {
        mail: "Enrik.Hiller@innovITive.de",
        mobile: "+49 176 49450720",
        linkedin: {
          alt: "LinkedIn",
          src: "https://www.linkedin.com/in/enrik-hiller-3a2095208/"
        }
      }
    }
  ]


}
