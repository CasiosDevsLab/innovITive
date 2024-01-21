import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ButtonService } from 'src/app/service/button.service';

@Component({
  selector: 'app-horizontal-scroll',
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.scss']
})
export class HorizontalScrollComponent {

  @Input()
  articles?: Article[];


  constructor(public button: ButtonService) {
      
  }

}
