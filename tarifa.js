let pagoMes = 30000;
let consumoKWH = 350;
let recargo = 20*pagoMes/100+pagoMes;

(consumoKWH > 300)? console.log(recargo): console.log("Ustede mantiene el subsidio,y pagara"+" "+"$"+pagoMes);

  
 

console.log("Debido a que su hogar tuvo un consumo de 450kwh, en base al ajuste tarifario,cumplimos con informarle que se ha ajustado el total a pagar, que será de"+" "+"$"+recargo);
