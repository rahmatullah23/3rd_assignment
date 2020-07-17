//feetToMile
function feetToMile(feet) {
    const mile = feet/5280;
    return mile;
}

let result = feetToMile(1000) 
console.log(result);

// woodCalculator
function woodCalculator(chair, table, bed){
    const chairCount = chair * 1;
    const tableCount = table * 3;
    const bedCount = bed * 5;
    
    let totalwood = chairCount+tableCount+bedCount;
    return totalwood; 
}
 let woodresult= woodCalculator(1,2,1)
 console.log(woodresult);


// /brickCalculator
function brickCalculator(floor){

    let brick = 0; 
    if (floor <=10){
         brick = floor *15*1000;
          } else if (floor <=20){
            let firstPart = 10 * 15 * 1000 ;
            let remaining = floor - 10;
            let secondPart = remaining * 12 * 1000;
            brick = firstPart + secondPart;
          }
          else{
              let firstPart = 10*15*1000 ;
              let secondPart = 10*12*1000;
              let remaining = floor-20;
              let thirdPart = remaining * 10*1000;
              brick = firstPart+secondPart+thirdPart 
          }
          return brick;
        }
        let brickTotal = brickCalculator(32)
        console.log (brickTotal);

//tinyFriend
function tinyFriend(names){
    let smallest = names[0];
    for(let i = 0; i < names.length; i++){
        let currentName = names[i];
        if(currentName.length < smallest.length){
            smallest = currentName;
        }
    }
    return smallest;
}
 let friendsList = ['mahbub', 'shahadat','opu', 'mohaimen', 'khalid','rubel','tipu'];
 console.log(tinyFriend(friendsList));