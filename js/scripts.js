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

//UI Logic
$(document).ready(function(){
  $("form#neighbor").submit(function(event){
    event.preventDefault();
  });
});