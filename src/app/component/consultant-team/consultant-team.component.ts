import { Component, Input } from '@angular/core';
import { Consultant } from 'src/app/model/consultant';

@Component({
  selector: 'app-consultant-team',
  templateUrl: './consultant-team.component.html',
  styleUrls: ['./consultant-team.component.scss']
})
export class ConsultantTeamComponent {

  @Input()
  consultants: Consultant[] = []

  current?: Consultant = this.consultants[0]

  showDetails(consultant: Consultant) {
    this.current = consultant
  }

}
