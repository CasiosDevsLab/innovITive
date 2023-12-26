import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-articles-btn',
  templateUrl: './articles-btn.component.html',
  styleUrls: ['./articles-btn.component.scss']
})
export class ArticlesBtnComponent {

  @Input()
  articles?: Article[];



  constructor(private router: Router) { }
  
  navigateTo(path: any) {
    this.router.navigateByUrl(path)
  }

  removeLoading(id: number) {
    let div = document.querySelector('#skeleton'+ id);
    div?.classList.remove("loading")
    div?.classList.remove("background")
  }
  
}

