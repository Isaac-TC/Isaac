import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tikets } from './tikets';

describe('Tikets', () => {
  let component: Tikets;
  let fixture: ComponentFixture<Tikets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tikets]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tikets);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
