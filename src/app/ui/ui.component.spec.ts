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

  it('Should call calculate method "delgades leve"', () => {
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
  it('Should call calculate method "delgades moderada"', () => {
    // Arrange
    let result = 0;
    component.weight = 46;
    component.height = 168;
    component.age = 20;

    // Act
    component.calculate();
    result = component.result_imc;

    // Assert
    expect(result).toBe(16.3);
 });
  it('Should call calculate method "delgades severa"', () => {
    // Arrange
    let result = 0;
    component.weight = 40;
    component.height = 168;
    component.age = 20;

    // Act
    component.calculate();
    result = component.result_imc;

    // Assert
    expect(result).toBe(14.17);
 });

 it('Should call calculate method "Normal"', () => {
  // Arrange
  let result = 0;
  component.weight = 60;
  component.height = 168;
  component.age = 20;

  // Act
  component.calculate();
  result = component.result_imc;

  // Assert
  expect(result).toBe(21.26);
});


it('Should call calculate method "pre obeso"', () => {
  // Arrange
  let result = 0;
  component.weight = 73;
  component.height = 168;
  component.age = 20;

  // Act
  component.calculate();
  result = component.result_imc;

  // Assert
  expect(result).toBe(25.86);
});
it('Should call calculate method "obesidad tipo 1"', () => {
  // Arrange
  let result = 0;
  component.weight = 90;
  component.height = 168;
  component.age = 20;

  // Act
  component.calculate();
  result = component.result_imc;

  // Assert
  expect(result).toBe(31.89);
});

it('Should call calculate method "obesidad tipo 2"', () => {
  // Arrange
  let result = 0;
  component.weight = 100;
  component.height = 168;
  component.age = 20;

  // Act
  component.calculate();
  result = component.result_imc;

  // Assert
  expect(result).toBe(35.43);
});

it('Should call calculate method "obesidad tipo 3"', () => {
  // Arrange
  let result = 0;
  component.weight = 150;
  component.height = 168;
  component.age = 20;

  // Act
  component.calculate();
  result = component.result_imc;

  // Assert
  expect(result).toBe(53.15);
});

 
  it('ui show call calculate and show results', () => {
    // Arrange 
    component.weight = 55;
    component.height = 168;
    component.age = 20;
    let sqrtButton = fixture.debugElement.query(By.css('.contact3-form-btn'));

    // Act
    sqrtButton.triggerEventHandler('click', null);

    // Assert
    expect(component.result_imc).toBe(19.49);

   });


});

