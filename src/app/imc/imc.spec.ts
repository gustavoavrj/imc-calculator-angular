import { imc } from "./imc"

describe('imc unit tests', () => {
  

 
 

    it(' Estatura: 1.68 metros, Edad: 18, Peso: 50 kg, Sexo: M = 17.7', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0.0;
        
        // Act
        result = imc(1.68, 50);

        // Assert
        expect(result).toBe(17.72);
    })
    it('Estatura: 1.70 metros, Edad: 22, Peso: 89 kg, Sexo: H = IMC: 30.8, Status: Obeso, Peso normal: 53.5 - 72', () => {
        // Arrange
        let result = 0;
        // Act
        result = imc(1.70,89);
        // Assert
        expect(result).toBe(30.8);
    })
    it('Estatura: 1.55 metros, Edad: 21, Peso: 55 kg, Sexo: M = IMC: 22.9, Status: Normal, Peso normal: 44.4 - 59.8 ', () => {
      // Pattern AAA (Arrange - Act - Assert)

      // Arrange
      let result = 0;
      
      // Act
      result = imc(1.55,55);

      // Assert
      expect(result).toBe(22.89);
  })
    it('Estatura: 1.85 metros, Edad: 29, Peso: 93 kg, Sexo H = IMC: 27.2, Status: Sobre peso, Peso normal: 25 - 29.9', () => {
    // Pattern AAA (Arrange - Act - Assert)

    // Arrange
    let result = 0;
    
    // Act
    result = imc(1.85,93);

    // Assert
    expect(result).toBe(27.17);
  })

})
