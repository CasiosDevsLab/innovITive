import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantTeamComponent } from './consultant-team.component';

describe('ConsultantTeamComponent', () => {
  let component: ConsultantTeamComponent;
  let fixture: ComponentFixture<ConsultantTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultantTeamComponent]
    });
    fixture = TestBed.createComponent(ConsultantTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
