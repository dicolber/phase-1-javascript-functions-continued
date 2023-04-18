// code your solution here
function  saturdayFun (activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun('have a party')

const mondayWork = function mondayWork(work="go to the office") {
   return `This Monday, I will ${work}.`
}
mondayWork('This Monday, I will work from home.')

function wrapAdjective(star = "*") {
  return function(adjective = "special") {
    return `You are ${star}${adjective}${star}!`;
  }
}
