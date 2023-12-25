import { Component, Input } from '@angular/core';
import { Consultant } from 'src/app/model/consultant';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss']
})
export class BusinessCardComponent {

  experiencesOpen = false;
  contactOpen = false;

  rotationExp = 0;
  rotationContact = 0;

  @Input()
  consultant?: Consultant;

  showExp() {
    this.experiencesOpen = !this.experiencesOpen;
    this.rotationExp = this.experiencesOpen ? 90 : 0 
  }

  showContact() {
    this.contactOpen = !this.contactOpen;
    this.rotationContact = this.contactOpen ? 90 : 0 

  }



}
