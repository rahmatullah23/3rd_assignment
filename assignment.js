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