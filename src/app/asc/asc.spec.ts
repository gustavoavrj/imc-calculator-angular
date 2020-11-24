import { asc } from "./asc"

describe('asc unit tests', () => {
  

 
    it('Estatura: 1.68 metros, Peso: 50 kg, = ASC:41.74', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = 0.0;
        
        // Act
        result = asc(50, 168);

        // Assert
        expect(result).toBe(1.56);
    })
    it('Estatura: 1.70 metros, Peso: 89 kg = ASC:54.11', () => {
        // Arrange
        let result = 0;
        // Act
        result = asc(89, 170);
        // Assert
        expect(result).toBe(2);
    })
    it('Estatura: 1.55 metros, Peso: 55 kg = ASC:37.78 ', () => {
      // Pattern AAA (Arrange - Act - Assert)

      // Arrange
      let result = 0;
      
      // Act
      result = asc(55, 155);

      // Assert
      expect(result).toBe(1.53);
  })
    it('Estatura: 1.85 metros, Peso: 93 kg = ASC:61.56', () => {
    // Pattern AAA (Arrange - Act - Assert)

    // Arrange
    let result = 0;
    
    // Act
    result = asc(93, 185);

    // Assert
    expect(result).toBe(2.17);
  })

})
