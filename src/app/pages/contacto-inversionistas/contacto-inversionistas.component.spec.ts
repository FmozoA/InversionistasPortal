import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoInversionistasComponent } from './contacto-inversionistas.component';

describe('ContactoInversionistasComponent', () => {
  let component: ContactoInversionistasComponent;
  let fixture: ComponentFixture<ContactoInversionistasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactoInversionistasComponent]
    });
    fixture = TestBed.createComponent(ContactoInversionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
