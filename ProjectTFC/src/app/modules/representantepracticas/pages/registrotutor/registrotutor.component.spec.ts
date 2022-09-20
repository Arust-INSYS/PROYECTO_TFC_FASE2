import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrotutorComponent } from './registrotutor.component';

describe('RegistrotutorComponent', () => {
  let component: RegistrotutorComponent;
  let fixture: ComponentFixture<RegistrotutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrotutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrotutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
