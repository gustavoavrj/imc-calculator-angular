
export function asc(weight, height){
    let result = 0.0;
       result = (0.007184 * Math.pow(weight, 0.425)) * (Math.pow(height, 0.725))
    return Number(result.toFixed(2))
  }