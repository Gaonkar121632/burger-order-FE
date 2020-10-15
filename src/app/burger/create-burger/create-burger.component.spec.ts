import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBurgerComponent } from './create-burger.component';

describe('CreateBurgerComponent', () => {
  let component: CreateBurgerComponent;
  let fixture: ComponentFixture<CreateBurgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBurgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
