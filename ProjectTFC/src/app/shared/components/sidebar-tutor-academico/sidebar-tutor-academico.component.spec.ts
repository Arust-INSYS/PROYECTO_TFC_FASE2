import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarTutorAcademicoComponent } from './sidebar-tutor-academico.component';

describe('SidebarTutorAcademicoComponent', () => {
  let component: SidebarTutorAcademicoComponent;
  let fixture: ComponentFixture<SidebarTutorAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarTutorAcademicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarTutorAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
