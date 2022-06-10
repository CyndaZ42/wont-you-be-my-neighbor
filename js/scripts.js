//Utility Logic

function RNG(cap){
  return Math.floor(math.random() * cap) + 1;
}

//Buisiness Logic

function countTo(long){
  let counting = [];
  length = parseInt(long)
  for (let i = 0; i <= length; i++) {
    counting.push(i);
  }
 return counting;
}

function beepBoop(list){
  outputArray = list.map(function(element){
    if (element.toString().includes(3)){
      return "Won't you be my neighbor";
    }
    else if (element.toString().includes(2)){
      return "Boop";
    }
    else if (element.toString().includes(1)){
      return "Beep!";
    }
    else {
      return element;
    }
  });
  return outputArray;
}

//UI Logic

$(document).ready(function(){
  $("form#neighbor").submit(function(event){
    event.preventDefault();
    const number = $("#number").val();
    $("#output").text(beepBoop(countTo(number)));
  });
});