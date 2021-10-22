export  const calculo=(interes,monto,cuota)=>{

    let resul= monto*(interes * (Math.pow((1 + interes), cuota)) / (Math.pow((1 + interes), cuota) - 1));
     return resul;
}