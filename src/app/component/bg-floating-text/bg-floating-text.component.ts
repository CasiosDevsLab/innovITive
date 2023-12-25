import { Component, Input } from '@angular/core';
import { Button } from 'src/app/model/button';

@Component({
  selector: 'app-bg-floating-text',
  templateUrl: './bg-floating-text.component.html',
  styleUrls: ['./bg-floating-text.component.scss']
})
export class BgFloatingTextComponent {

  @Input()
  button?: Button;
  
  @Input()
  title?: string;

  @Input()
  description?: string; 



  removeLoading() {
    let div = document.querySelector('#home-skeleton');
    div?.classList.remove("loading")
    div?.classList.remove("background")
  }

  call(arg0: () => void) {
    arg0.call(this);
  }

}
