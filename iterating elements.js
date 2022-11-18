const dailyRoutine=["wake up","eat","sleep"]

// for_of

for(let routine of dailyRoutine){

    console.log(routine);
}

// for_in

for(let  routine in dailyRoutine){

    console.log(routine,dailyRoutine[routine]);
}

// for_each

dailyRoutine.forEach((value,index)=>{
  console.log(value,index);
})