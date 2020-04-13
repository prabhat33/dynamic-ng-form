import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicfieldComponent } from './dynamicfield.component';

describe('DynamicfieldComponent', () => {
  let component: DynamicfieldComponent;
  let fixture: ComponentFixture<DynamicfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
