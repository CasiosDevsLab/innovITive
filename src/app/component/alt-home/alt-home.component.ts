import { Component } from '@angular/core';
import { Consultant } from 'src/app/model/consultant';

@Component({
  selector: 'app-alt-home',
  templateUrl: './alt-home.component.html',
  styleUrls: ['./alt-home.component.scss']
})
export class AltHomeComponent {

  

  consultants: Consultant[] = [
    
    /*{
      firstname: "Lennart",
      lastname: "Behrendt",
      img: "lennartbehrendt.png",
      role: "Consultant"
    },
    {
      firstname: "Enrik",
      lastname: "Hiller",
      img: "lennartbehrendt.png",
      role: "Consultant"
    },
    {
      firstname: "Armin",
      lastname: "Hiller",
      img: "lennartbehrendt.png",
      role: "Consultant"
    },
    {
      firstname: "Alexander",
      lastname: "Hofhammer",
      img: "lennartbehrendt.png",
      role: "Developer"
    }
    */
  ];


  

}
