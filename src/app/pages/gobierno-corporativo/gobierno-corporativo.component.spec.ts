import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GobiernoCorporativoComponent } from './gobierno-corporativo.component';

describe('GobiernoCorporativoComponent', () => {
  let component: GobiernoCorporativoComponent;
  let fixture: ComponentFixture<GobiernoCorporativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GobiernoCorporativoComponent]
    });
    fixture = TestBed.createComponent(GobiernoCorporativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
