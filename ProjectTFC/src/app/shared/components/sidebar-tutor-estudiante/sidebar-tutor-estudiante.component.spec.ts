import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTutorEstudianteComponent } from './sidebar-tutor-estudiante.component';

describe('SidebarTutorEstudianteComponent', () => {
  let component: SidebarTutorEstudianteComponent;
  let fixture: ComponentFixture<SidebarTutorEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarTutorEstudianteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarTutorEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
