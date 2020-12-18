import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingboardComponent } from './landingboard.component';

describe('LandingboardComponent', () => {
  let component: LandingboardComponent;
  let fixture: ComponentFixture<LandingboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
