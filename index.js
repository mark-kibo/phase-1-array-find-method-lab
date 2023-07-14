// code your solution here
function superbowlWin(records){
    const result =records.find(item => item.result === "W")
    
    if (result == null ){
        return undefined
    }else{
        return result.year;
    }
}