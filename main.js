/*var Noun = "dog";
var myAdjective = "slitherin";
var Verb = "swam";
var myAdverb = "elegantly";


function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
   var result = "";
   result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + "." 
   return result;
}

console.log(wordBlanks(dog, slitherin,swam, elegantly)); */

console.log('a');


var noun = document.getElementById("myNoun");
var adjective = document.getElementById("myAdjective");
var verb = document.getElementById("myVerb");
var adverb = document.getElementById("myAdverb");

console.log('b');
document.getElementById("submit").onclick = function() {
   //var result = "";
   console.log('button clicked');
   var result = "The " + adjective.value + " " + noun.value + " " + verb.value + " to the store " + adverb.value + "."
   

   document.getElementById("result").textContent = result;
   console.log('button clicked END:', result);
}

// console.log('result:', result);
