import { Component } from '@angular/core';
import { default as data } from './data.json';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent {

  impressum:any = data.impressum;


  removeLoading() {
    let div = document.querySelector('#home-skeleton');
    div?.classList.remove("loading")
    div?.classList.remove("background")
  }

}
