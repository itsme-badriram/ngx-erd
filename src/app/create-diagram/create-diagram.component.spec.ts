import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiagramComponent } from './create-diagram.component';

describe('CreateDiagramComponent', () => {
  let component: CreateDiagramComponent;
  let fixture: ComponentFixture<CreateDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
