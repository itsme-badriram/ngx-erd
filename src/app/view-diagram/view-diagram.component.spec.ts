import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiagramComponent } from './view-diagram.component';

describe('ViewDiagramComponent', () => {
  let component: ViewDiagramComponent;
  let fixture: ComponentFixture<ViewDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
