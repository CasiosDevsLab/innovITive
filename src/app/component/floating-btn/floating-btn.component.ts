import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-btn',
  templateUrl: './floating-btn.component.html',
  styleUrls: ['./floating-btn.component.scss']
})
export class FloatingBtnComponent {
  constructor(public router: Router) {}
}
