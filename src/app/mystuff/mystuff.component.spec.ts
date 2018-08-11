import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MystuffComponent } from './mystuff.component';

describe('MystuffComponent', () => {
  let component: MystuffComponent;
  let fixture: ComponentFixture<MystuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MystuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MystuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
