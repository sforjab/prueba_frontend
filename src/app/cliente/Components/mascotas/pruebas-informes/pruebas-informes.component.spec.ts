import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasInformesComponent } from './pruebas-informes.component';

describe('PruebasInformesComponent', () => {
  let component: PruebasInformesComponent;
  let fixture: ComponentFixture<PruebasInformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasInformesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebasInformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
