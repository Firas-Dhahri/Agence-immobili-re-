import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsapartComponent } from './detailsapart.component';

describe('DetailsapartComponent', () => {
  let component: DetailsapartComponent;
  let fixture: ComponentFixture<DetailsapartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsapartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsapartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
