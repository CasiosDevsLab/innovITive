import { Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';
import { ButtonService } from 'src/app/service/button.service';

@Component({
  selector: 'app-splitview-text-image',
  templateUrl: './splitview-text-image.component.html',
  styleUrls: ['./splitview-text-image.component.scss']
})
export class SplitviewTextImageComponent {

  @Input()
  articles?: Article[];

  constructor(public button: ButtonService) {}
}
