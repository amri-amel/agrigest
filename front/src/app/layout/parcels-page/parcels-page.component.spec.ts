import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelsPageComponent } from './parcels-page.component';

describe('ParcelsPageComponent', () => {
  let component: ParcelsPageComponent;
  let fixture: ComponentFixture<ParcelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcelsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
