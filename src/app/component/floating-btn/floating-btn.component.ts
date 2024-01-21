import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Button } from 'src/app/model/button';

@Component({
  selector: 'app-floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.scss']
})
export class FloatingBtnComponent {

  @Input()
  button: Button | undefined;
  
  constructor(public router: Router) {}

  call(arg0?: () => void) {
    if (arg0)
    arg0.call(this);
  }
}
