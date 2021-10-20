export  const calculo=(interes,monto,cuotas)=>{

    let resul= monto*(interes * (Math.pow((1 + interes), cuotas)) / (Math.pow((1 + interes), cuotas) - 1));
     return resul;
}