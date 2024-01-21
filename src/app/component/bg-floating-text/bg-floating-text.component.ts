import { Component, Input } from '@angular/core';
import { Article } from 'src/app/model/article';
import { Button } from 'src/app/model/button';

@Component({
  selector: 'app-bg-floating-text',
  templateUrl: './bg-floating-text.component.html',
  styleUrls: ['./bg-floating-text.component.scss']
})
export class BgFloatingTextComponent {

  @Input()
  article: Article | undefined;

  call(arg0: () => void) {
    arg0.call(this);
  }

}
