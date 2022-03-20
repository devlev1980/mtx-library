import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtxButtonComponent } from './mtx-button.component';

describe('MtxButtonComponent', () => {
  let component: MtxButtonComponent;
  let fixture: ComponentFixture<MtxButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtxButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
