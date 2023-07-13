import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionInversionistasComponent } from './informacion-inversionistas.component';

describe('InformacionInversionistasComponent', () => {
  let component: InformacionInversionistasComponent;
  let fixture: ComponentFixture<InformacionInversionistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionInversionistasComponent]
    });
    fixture = TestBed.createComponent(InformacionInversionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
