
export function mcm(genero, weight, height){
    let result = 0.0;
    if (genero == "woman"){
      result = ((0.29569 * weight) + (0.41813 * height)) - 43.2933
     } else if (genero == "man"){
       result = ((0.32810 * weight) + (0.33929 * height)) - 29.5336
     }
    return Number(result.toFixed(2))
  }