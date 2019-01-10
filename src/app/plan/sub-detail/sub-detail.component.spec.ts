import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDetailComponent } from './sub-detail.component';

describe('SubDetailComponent', () => {
  let component: SubDetailComponent;
  let fixture: ComponentFixture<SubDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
