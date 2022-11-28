import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCocktailComponent } from './all-cocktail.component';

describe('AllCocktailComponent', () => {
  let component: AllCocktailComponent;
  let fixture: ComponentFixture<AllCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCocktailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
