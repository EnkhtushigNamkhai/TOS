import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummitPageComponent } from './summit-page.component';

describe('SummitPageComponent', () => {
  let component: SummitPageComponent;
  let fixture: ComponentFixture<SummitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
