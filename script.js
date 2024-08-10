let numero = parseInt(prompt('ingrese un numero'));
let anos = [33, 978, 2000, 5];

function divisible(){
    if(numero % 5 === 0 && numero % 11 === 0){
        alert(`el numero ${numero} es divisible por 5 y 11`);
        anos.push(numero);
        for(let i = 0; i<anos.length;i++){
            console.log(anos[i]);
        }
    }else{
        alert(`el numero ${numero} no es divisible por 5 y 11`);
        anos.push(numero);
        for(let i = 0; i < anos.length;i++){
            console.log(anos[i]);
        }
    }
}
divisible();

