import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCorporativoComponent } from './perfil-corporativo.component';

describe('PerfilCorporativoComponent', () => {
  let component: PerfilCorporativoComponent;
  let fixture: ComponentFixture<PerfilCorporativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilCorporativoComponent]
    });
    fixture = TestBed.createComponent(PerfilCorporativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
