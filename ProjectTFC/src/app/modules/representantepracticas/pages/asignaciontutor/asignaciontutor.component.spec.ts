import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaciontutorComponent } from './asignaciontutor.component';

describe('AsignaciontutorComponent', () => {
  let component: AsignaciontutorComponent;
  let fixture: ComponentFixture<AsignaciontutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignaciontutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignaciontutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
