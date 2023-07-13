import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionFinancieraComponent } from './informacion-financiera.component';

describe('InformacionFinancieraComponent', () => {
  let component: InformacionFinancieraComponent;
  let fixture: ComponentFixture<InformacionFinancieraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionFinancieraComponent]
    });
    fixture = TestBed.createComponent(InformacionFinancieraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
