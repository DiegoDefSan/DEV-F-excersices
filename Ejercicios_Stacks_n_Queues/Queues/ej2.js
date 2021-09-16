/*
2.- Se tiene una cola en la cual se han repartido tickets con 
el orden de atención. Sin embargo, llegada la hora de inicio hay muchos "colados"
, es por esto que se le ordena al vigilante que retire a todos aquellos que no 
tienen ticket. Muestra la cola inicial, qué elementos fueron retirados de la cola 
y la cola final.
 
Sugerencia: desencolar cada elemento, si tiene el ticket se vuelve 
a encolar, si no se retira.
*/

const Cola = [
    { user:'User1', ticket:true },
    { user:'User2', ticket:true },
    { user:'User3', ticket:false },
    { user:'User4', ticket:true },
    { user:'User5', ticket:false },
    { user:'User6', ticket:false },
    { user:'User7', ticket:true },
    { user:'User8', ticket:true },
    { user:'User9', ticket:true },
    { user:'User10', ticket:false },
    { user:'User11', ticket:true },
];


function misTickets (arr) {
    let arr0 = arr.slice();
    let arrQuedan = [];
    let arrRetirados = [];
    
    for (let i = 0; i<arr.length; i++) {
        let lst = arr[i];
        if (lst.ticket) {
            arrQuedan.push(lst);
        } else {
            arrRetirados.push(lst);
        }
    }

    console.log('Cola inicial: ', arr0);
    console.log('Cola Retirados: ', arrRetirados);
    console.log('Cola Quedan: ', arrQuedan);
}

misTickets(Cola)

