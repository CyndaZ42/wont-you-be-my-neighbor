//Utility Logic

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
  });
  return outputArray;
}

//UI Logic
$(document).ready(function(){
  $("form#neighbor").submit(function(event){
    event.preventDefault();
  });
});