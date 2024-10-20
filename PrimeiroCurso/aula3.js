function teste(arrey) {
    let cuscuz = [];
 for (let i = 0; i <arrey.length; i++){
   if(arrey[i]% 2 === 0 ){
    cuscuz.push(array[i]);
   } else {
       console.log("Esses numero nao e par", arrey[i])
   }
 }
 console.log("Os numeros pares sao: ",cuscuz);
}

let array = [1, 2, 4, 5,7, 8];

teste(array);