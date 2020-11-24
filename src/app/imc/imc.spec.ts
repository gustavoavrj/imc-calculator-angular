import { imc } from "./imc"

describe('imc unit tests', () => {
  

 
 

    it(' Estatura: 168 cm, Peso: 50 kg = 17.7', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0.0;
        
        // Act
        result = imc(168, 50);

        // Assert
        expect(result).toBe(17.72);
    })
    it('Estatura: 170 cm, Peso: 89 kg = IMC: 30.8', () => {
        // Arrange
        let result = 0;
        // Act
        result = imc(170,89);
        // Assert
        expect(result).toBe(30.8);
    })
    it('Estatura: 155 cm, Peso: 55 kg = IMC: 22.9', () => {
      // Pattern AAA (Arrange - Act - Assert)

      // Arrange
      let result = 0;
      
      // Act
      result = imc(155,55);

      // Assert
      expect(result).toBe(22.89);
  })
    it('Estatura: 185 cm, Peso: 93 kg = IMC: 27.2', () => {
    // Pattern AAA (Arrange - Act - Assert)

    // Arrange
    let result = 0;
    
    // Act
    result = imc(185,93);

    // Assert
    expect(result).toBe(27.17);
  })

})
