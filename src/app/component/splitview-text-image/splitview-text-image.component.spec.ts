import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitviewTextImageComponent } from './splitview-text-image.component';

describe('SplitviewTextImageComponent', () => {
  let component: SplitviewTextImageComponent;
  let fixture: ComponentFixture<SplitviewTextImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplitviewTextImageComponent]
    });
    fixture = TestBed.createComponent(SplitviewTextImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
