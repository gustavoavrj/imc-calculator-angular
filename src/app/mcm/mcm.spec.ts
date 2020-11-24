import { mcm } from "./mcm"

describe('mcm unit tests', () => {
  

 
    it('Estatura: 1.68 metros, Peso: 50 kg, Sexo: M = MSM:41.74', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0.0;
        
        // Act
        result = mcm("woman",50, 168);

        // Assert
        expect(result).toBe(41.74);
    })
    it('Estatura: 1.70 metros, Peso: 89 kg, Sexo: H = MSM:54.11', () => {
        // Arrange
        let result = 0;
        // Act
        result = mcm("man",89, 170);
        // Assert
        expect(result).toBe(54.11);
    })
    it('Estatura: 1.55 metros, Peso: 55 kg, Sexo: M = MSM:37.78 ', () => {
      // Pattern AAA (Arrange - Act - Assert)

      // Arrange
      let result = 0;
      
      // Act
      result = mcm("woman", 55, 155);

      // Assert
      expect(result).toBe(37.78);
  })
    it('Estatura: 1.85 metros, Peso: 93 kg, Sexo H =MSM:61.56', () => {
    // Pattern AAA (Arrange - Act - Assert)

    // Arrange
    let result = 0;
    
    // Act
    result = mcm("man", 93, 185);

    // Assert
    expect(result).toBe(61.56);
  })

})
