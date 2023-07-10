import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalOfficeComponent } from './personal-office.component';

describe('PersonalOfficeComponent', () => {
  let component: PersonalOfficeComponent;
  let fixture: ComponentFixture<PersonalOfficeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalOfficeComponent]
    });
    fixture = TestBed.createComponent(PersonalOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
