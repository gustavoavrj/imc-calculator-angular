export function imc(oper1,oper2){
    let imc = 0.0;
    imc = oper2 / Math.pow(oper1, 2)
    return Number(imc.toFixed(2));
}