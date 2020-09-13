function dwarfRollCall(dwarves) {
  var str = "";
  for (var i = dwarves.length ; i>dwarves.length; i--){
    str += (i+1)+". "+ dwarves[i]+" "; 
  }
  return str;
}

function summonCaptainPlanet(planeteerCalls){
  const capital = [];
for (var i = 0; i<planeteerCalls.length; i++){
    capital[i] = planeteerCalls[i].toUpperCase() +"!";
  }
  return capital;
}   


function longPlaneteerCalls(words) {
  for (var i = 0; i<words.length; i++){
    if(words[i].length > 4){
      return true;
    }
    else{
      return false;
    }
  }
}

function findTheCheese (foods) {
  let cheese = ["cheddar","gouda","camembert","brie"];

  for (var i = 0; i<foods.length;i++){
    for (var j = 0; j<cheese.length; j++){
      if (foods[i] === cheese[j]){
        return foods[i];
      }
    }
  }
    return "no cheese!";
}

function wordsWithB(words){
  var newArr = [];
  for (var i = 0; i<words.length; i++){
    if(words[i].startsWith("b")){
      newArr.push(words[i]);
    }
  }
  return newArr;
}


