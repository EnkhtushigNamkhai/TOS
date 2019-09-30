import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardComponentComponent } from './info-card-component.component';

describe('InfoCardComponentComponent', () => {
  let component: InfoCardComponentComponent;
  let fixture: ComponentFixture<InfoCardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
