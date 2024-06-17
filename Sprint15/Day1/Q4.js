var totalCost='$45';
var loyalty='no';
var distance='4';

if(totalCost>='$50'){
  console.log('You get a free delivery');
}
else{
  if(loyalty=='yes'){
    console.log('You get a free delivery');
  }
  else{
    if(distance<='5'){
      console.log('You get a free delivery');
    }
    else{
      console.log('You have to pay for delivery');
    }
  }
}