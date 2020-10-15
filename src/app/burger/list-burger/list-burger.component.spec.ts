import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBurgerComponent } from './list-burger.component';

describe('ListBurgerComponent', () => {
  let component: ListBurgerComponent;
  let fixture: ComponentFixture<ListBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
