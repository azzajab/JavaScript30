var seconds_hand = document.querySelector('.second-hand');
var minutes_hand = document.querySelector('.min-hand');
var hours_hand = document.querySelector('.hour-hand');

console.log(Date());

function setDate(){
  const now = new Date();
  //Calc seconds hand
  var seconds_deg = ((now.getSeconds()/60)*360)+90; // calc degree for seconds
  seconds_hand.style.transform=`rotate(${seconds_deg}deg)`;
  //console.log(seconds_deg);

  // Calc minutes hand
  var minutes_deg = ((now.getMinutes()/60)*360)+90; // calc degree for seconds
  minutes_hand.style.transform=`rotate(${minutes_deg}deg)`;

  // Calc hours hand
  var hours_deg = ((now.getHours()/12)*360)+90; // calc degree for seconds
  hours_hand.style.transform=`rotate(${hours_deg}deg)`;
  console.log(now.getMinutes());
  console.log(now.getHours());
  console.log(now.getSeconds());
console.log('hours :' + hours_deg + ' minutes : ' + minutes_deg + ' seconds : ' + seconds_deg);
}

setInterval(setDate, 1000);
