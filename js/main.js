let datos = [1,2,3,4,5,6,7,8];
let botones = Array.from(document.querySelectorAll(".boton"));
let blank = 9;
let posicion = [-3,-1,1,3];

function shuffle(array){
    return array.sort(() => Math.random() - 0.5);
}

function randomizar(){
    let numeros = shuffle(datos);
    let cont = 0 , num ;
    for(i in botones){
        num = numeros[cont++];
        botones[i].value = (num)?num:" ";
    }
}
randomizar();
/*hideFunction(botones[blank-1]);*/

function changeNumber(target){
    let id = target.id.split("_")[1];
    for(var i = 0 ; i<4 ;i++){
      if(blank+posicion[i]==parseInt(id)){
            botones[blank-1].value = target.value;
            botones[id-1].value = " ";
            blank = parseInt(id);
        }
    }
}
