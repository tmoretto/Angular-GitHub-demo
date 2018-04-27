import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListrepoComponent } from './listrepo.component';

describe('ListrepoComponent', () => {
  let component: ListrepoComponent;
  let fixture: ComponentFixture<ListrepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListrepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
