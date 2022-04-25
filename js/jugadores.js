var nameplayers = [];
var counter = 1;

function checkPlayer(){
  let nameplayer= document.getElementById("nameplayer").value;
  if(nameplayer.toString() !== null && nameplayer.toString() !==  ''){
    SavePlayer(nameplayer);
    ClearInputData();
  }
  else{
    alert('Ingrese Nomnbre de Jugador')
  } 
}

function SavePlayer(player){

  if(counter === 2){
    nameplayers.push(player);
    SaveLocalStograge();
    window.location.replace('../../JuegoPelota/Tablero.html');
  }else{
    nameplayers.push(player);
    IncreaseValue();
  }
}

// funcion para incrementar el valor
function IncreaseValue(){
  counter++;
  document.getElementById("counter_id").innerHTML = counter;
}

function SaveLocalStograge(){
  localStorage.setItem('items',JSON.stringify(nameplayers));
}
function ClearInputData(){
  document.getElementById("nameplayer").value= "";
}



window.addEventListener('load',()=>{
  document.getElementById("counter_id").innerHTML = counter;
  localStorage.removeItem('items');
});


