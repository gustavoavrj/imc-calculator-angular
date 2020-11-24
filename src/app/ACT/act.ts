
export function act(genero, weight, height, age){
    let result = 0.0;
    if (genero = "woman"){
      result = (0.1069 * height) + (0.2466 * weight) - 2.097

     } else if (genero = "man"){
       result = 2.447 - (0.09156 * age) + (0.1074 * height) + (0.3362 * weight)

     }
    return Number(result.toFixed(2))
  }