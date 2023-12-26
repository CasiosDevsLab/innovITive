import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesBtnComponent } from './articles-btn.component';

describe('ArticlesBtnComponent', () => {
  let component: ArticlesBtnComponent;
  let fixture: ComponentFixture<ArticlesBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArticlesBtnComponent]
    });
    fixture = TestBed.createComponent(ArticlesBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
