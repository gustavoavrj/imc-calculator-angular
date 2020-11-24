import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UiComponent } from './ui.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Ui test - imc', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should call calculate method', () => {
     // Arrange
     let result = 0;
     component.weight = 50;
     component.height = 168;
     component.age = 20;
 
     // Act
     component.calculate();
     result = component.result_imc;
 
     // Assert
     expect(result).toBe(17.72);
  });

 
  it('ui show call calculate and show results ', () => {
    // Arrange 
    component.weight = 50;
    component.height = 168;
    component.age = 20;
    let sqrtButton = fixture.debugElement.query(By.css('.contact3-form-btn'));

    // Act
    sqrtButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result_imc).toBe(17.72);

   });


});


