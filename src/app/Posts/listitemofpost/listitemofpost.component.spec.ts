import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListitemofpostComponent } from './listitemofpost.component';

describe('ListitemofpostComponent', () => {
  let component: ListitemofpostComponent;
  let fixture: ComponentFixture<ListitemofpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListitemofpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListitemofpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
