import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstuNavBarComponent } from './astu-nav-bar.component';

describe('AstuNavBarComponent', () => {
  let component: AstuNavBarComponent;
  let fixture: ComponentFixture<AstuNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstuNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstuNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
