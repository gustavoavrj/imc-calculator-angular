import { act } from "./act"

describe('act unit tests', () => {
  

 
    it('Estatura: 1.68 metros, Edad: 18, Peso: 50 kg, Sexo: M = ACT: 28.19', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0.0;
        
        // Act
        result = act("woman",50, 168, 18);

        // Assert
        expect(result).toBe(28.19);
    })
    it('Estatura: 1.70 metros, Edad: 22, Peso: 89 kg, Sexo: H = ACT: 48.61', () => {
        // Arrange
        let result = 0;
        // Act
        result = act("man",89, 170, 22);
        // Assert
        expect(result).toBe(48.61);
    })
    it('Estatura: 1.55 metros, Edad: 21, Peso: 55 kg, Sexo: M = ACT: 28.04', () => {
      // Pattern AAA (Arrange - Act - Assert)

      // Arrange
      let result = 0;
      
      // Act
      result = act("woman", 55, 155, 21);

      // Assert
      expect(result).toBe(28.04);
  })
    it('Estatura: 1.85 metros, Edad: 29, Peso: 93 kg, Sexo H = ACT:50.93', () => {
    // Pattern AAA (Arrange - Act - Assert)

    // Arrange
    let result = 0;
    
    // Act
    result = act("man", 93, 185, 29);

    // Assert
    expect(result).toBe(50.93);
  })

})
