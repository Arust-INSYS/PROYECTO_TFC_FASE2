import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistruserComponent } from './registruser.component';

describe('RegistruserComponent', () => {
  let component: RegistruserComponent;
  let fixture: ComponentFixture<RegistruserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistruserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistruserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
