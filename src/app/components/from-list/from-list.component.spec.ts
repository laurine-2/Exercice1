import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromListComponent } from './from-list.component';

describe('FromListComponent', () => {
  let component: FromListComponent;
  let fixture: ComponentFixture<FromListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
