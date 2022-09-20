import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeEmpresaComponent } from './welcome-empresa.component';

describe('WelcomeEmpresaComponent', () => {
  let component: WelcomeEmpresaComponent;
  let fixture: ComponentFixture<WelcomeEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeEmpresaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
