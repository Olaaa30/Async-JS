var player = {
    "score": 0
}

var computer = {
    "score": 0
}
var studentIDs = [10, 200, 50, 30, 100]
var dummyStrings = ["hello", "welcome","to my world", "howdy"]
studentIDs.sort(function(num1, num2){
    return num1 - num2;
});

export default function getRandomChoice(arrayOfChoices){
    return arrayOfChoices[Math.floor(Math.random()*arrayOfChoices.length)]
};
// function rockPaperScissors(){
//     var choices = ["rock", "paper", "scissors"];
//     while(player.score < 3 && computer.score < 3){
//         var input = prompt("which are you? (enter rock paper or scissors)");
//         var computerChoice = getRandomChoice(choices);
//         if (input.toLocaleLowerCase().startsWith("r") && computerChoice.startsWith("r")){
//             document.write("<p>draw</p>"+"</br>");
//         }
//     }
   
// }
document.write(getRandomChoice(studentIDs)+"</br>");
document.write(getRandomChoice(dummyStrings)+"</br>");
document.write(getRandomChoice(dummyStrings)+"</br>");
document.write(getRandomChoice(dummyStrings)+"</br>");
document.write(getRandomChoice(dummyStrings)+"</br>");
document.write((_sort(studentIDs))+"</br>");
document.write((studentIDs)+"</br>");
document.write("hellowrld");