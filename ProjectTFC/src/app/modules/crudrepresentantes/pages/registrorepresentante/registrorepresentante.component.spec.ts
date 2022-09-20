import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrorepresentanteComponent } from './registrorepresentante.component';

describe('RegistrorepresentanteComponent', () => {
  let component: RegistrorepresentanteComponent;
  let fixture: ComponentFixture<RegistrorepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrorepresentanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrorepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
