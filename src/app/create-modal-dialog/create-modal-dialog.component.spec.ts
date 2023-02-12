import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModalDialogComponent } from './create-modal-dialog.component';

describe('CreateModalDialogComponent', () => {
  let component: CreateModalDialogComponent;
  let fixture: ComponentFixture<CreateModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
