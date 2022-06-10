//Utility Logic

function RNG(){
  const cap2 = Math.floor(Math.random() * 969) + 1;
  const cap = Math.floor(Math.random() * cap2) + 1;
  return Math.floor(Math.random() * cap) + 1;
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

function beMyNeighbor(input){
  output = beepBoop(countTo(input));
  return output.join(" ");
}

//UI Logic

$(document).ready(function(){

  $("form#rndm").submit(function(event){
    event.preventDefault();
    const randomNum = RNG();
    $("#lazy").text("Your number is " + randomNum);
    $("#output").text(beMyNeighbor(randomNum));
  });

  $("form#neighbor").submit(function(event){
    event.preventDefault();
    const number = $("#number").val();
    $("#lazy").text("");
    $("#output").text(beMyNeighbor(number));
  });
});