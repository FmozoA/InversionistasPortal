import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesSostenibilidadComponent } from './informes-sostenibilidad.component';

describe('InformesSostenibilidadComponent', () => {
  let component: InformesSostenibilidadComponent;
  let fixture: ComponentFixture<InformesSostenibilidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformesSostenibilidadComponent]
    });
    fixture = TestBed.createComponent(InformesSostenibilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
