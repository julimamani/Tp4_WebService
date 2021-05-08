import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalDePeliculasComponent } from './portal-de-peliculas.component';

describe('PortalDePeliculasComponent', () => {
  let component: PortalDePeliculasComponent;
  let fixture: ComponentFixture<PortalDePeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalDePeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalDePeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
