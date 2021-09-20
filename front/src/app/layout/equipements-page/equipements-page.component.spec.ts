import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementsPageComponent } from './equipements-page.component';

describe('EquipementsPageComponent', () => {
  let component: EquipementsPageComponent;
  let fixture: ComponentFixture<EquipementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
