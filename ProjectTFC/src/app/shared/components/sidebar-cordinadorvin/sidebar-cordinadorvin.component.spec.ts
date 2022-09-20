import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCordinadorvinComponent } from './sidebar-cordinadorvin.component';

describe('SidebarCordinadorvinComponent', () => {
  let component: SidebarCordinadorvinComponent;
  let fixture: ComponentFixture<SidebarCordinadorvinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCordinadorvinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarCordinadorvinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
