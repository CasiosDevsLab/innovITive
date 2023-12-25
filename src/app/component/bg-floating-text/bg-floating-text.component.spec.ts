import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgFloatingTextComponent } from './bg-floating-text.component';

describe('BgFloatingTextComponent', () => {
  let component: BgFloatingTextComponent;
  let fixture: ComponentFixture<BgFloatingTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BgFloatingTextComponent]
    });
    fixture = TestBed.createComponent(BgFloatingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
