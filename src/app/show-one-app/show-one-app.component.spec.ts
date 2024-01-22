import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOneAppComponent } from './show-one-app.component';

describe('ShowOneAppComponent', () => {
  let component: ShowOneAppComponent;
  let fixture: ComponentFixture<ShowOneAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOneAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOneAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
