var counter = document.getElementById("actualEnergy");
counter = 3;
var round = document.getElementById("roundNumber");
roundNumber = 1;

var currentCardsCounter = document.getElementById("currentCards");
currentCardsCounter = 6;

/**
 * Energy-round functions
 */
function subtract(){
  counter -= 1;
  
  if (counter <= 0) {
    counter = 0;
  }
  
  document.getElementById("actualEnergy").innerHTML = counter;
}

function add(){
  counter += 1;
  
  if (counter >= 10) {
    counter = 10;
  }
  document.getElementById("actualEnergy").innerHTML = counter;
}

function nextRound(){
  roundNumber += 1;
  counter += 2;
  
  if (counter >= 10) {
    counter = 10;
  }
  
  if (roundNumber >= 10) {
    document.body.style.backgroundColor = "#b52930ad";
  } else {
    document.body.style.backgroundColor = "#c07f5aad";
  } 
  
  
  document.getElementById("roundNumber").innerHTML = roundNumber;
  document.getElementById("actualEnergy").innerHTML = counter;
}

function reset(){
  document.body.style.backgroundColor = "#c07f5aad";
  counter = 3;
  roundNumber = 1;
  
  document.getElementById("actualEnergy").innerHTML = counter;
  document.getElementById("roundNumber").innerHTML = roundNumber;

}

var w = 0;
var l = 0;
var d = 0;


function usePartA1M() {
  w += 1;
    
  document.getElementById("wCounter").innerHTML = w;
}

function substractPartA1M() {
  w -= 1;
  if (w < 0) {
    w = 0;
  }

  document.getElementById("wCounter").innerHTML = w;
}



function usePartA2M() {
  l += 1;
  
  document.getElementById("lCounter").innerHTML = l;
}

function substractPartA2M() {
  l -= 1;  
  if (l <= 0) {
    l = 0;
  }
  document.getElementById("lCounter").innerHTML = l;
}

function usePartA3M() {
  d += 1; 
  document.getElementById("dCounter").innerHTML = d;
}

function substractPartA3M() {
  d -= 1;
  
  if (d <= 0) {
    d = 0;
  }
  
  document.getElementById("dCounter").innerHTML = d;
}

function usePartA3H() {
  axie3horn += 1;
  
  if (axie3horn >= 2) {
    axie3horn = 2;
  }
  
  document.getElementById("a3hCounter").innerHTML = axie3horn;
}

function substractPartA3H() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3hCounter").innerHTML = axie1mouth;
}

function usePartA3B() {
  axie3back += 1;
  
  if (axie3back >= 2) {
    axie3back = 2;
  }
  
  document.getElementById("a3bCounter").innerHTML = axie3back;
}

function substractPartA3B() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3bCounter").innerHTML = axie1mouth;
}

function usePartA3T() {
  axie3tail += 1;
  
  if (axie3tail >= 2) {
    axie3tail = 2;
  }
  
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

function substractPartA3T() {
  axie1mouth -= 1;
  
  if (axie1mouth <= 0) {
    axie1mouth = 0;
  }
  
  document.getElementById("a3tCounter").innerHTML = axie1mouth;
}

function resetA3Parts() {
  document.getElementById("a3mButton").classList.remove("disabled");
  document.getElementById("a3mLabel").classList.remove("disabled");
  document.getElementById("a3hButton").classList.remove("disabled");
  document.getElementById("a3hLabel").classList.remove("disabled");
  document.getElementById("a3bButton").classList.remove("disabled");
  document.getElementById("a3bLabel").classList.remove("disabled");
  document.getElementById("a3tButton").classList.remove("disabled");
  document.getElementById("a3tLabel").classList.remove("disabled");
  document.getElementById("a3DeadButton").classList.remove("disabled");
  
  axie3mouth = 0;
  axie3horn = 0;
  axie3back = 0;
  axie3tail = 0;

  document.getElementById("a3mCounter").innerHTML = axie3mouth;
  document.getElementById("a3hCounter").innerHTML = axie3horn;
  document.getElementById("a3bCounter").innerHTML = axie3back;
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

function killAxie1 () {
  document.getElementById("a1mButton").classList.add("disabled");
  document.getElementById("a1mLabel").classList.add("disabled");
  document.getElementById("a1hButton").classList.add("disabled");
  document.getElementById("a1hLabel").classList.add("disabled");
  document.getElementById("a1bButton").classList.add("disabled");
  document.getElementById("a1bLabel").classList.add("disabled");
  document.getElementById("a1tButton").classList.add("disabled");
  document.getElementById("a1tLabel").classList.add("disabled");
  document.getElementById("a1DeadButton").classList.add("disabled");
  
  var axie1mouth = "-";
  var axie1horn = "-";
  var axie1back = "-";
  var axie1tail = "-";

  document.getElementById("a1mCounter").innerHTML = axie1mouth;
  document.getElementById("a1hCounter").innerHTML = axie1horn;
  document.getElementById("a1bCounter").innerHTML = axie1back;
  document.getElementById("a1tCounter").innerHTML = axie1tail;
}

function killAxie2 () {
  document.getElementById("a2mButton").classList.add("disabled");
  document.getElementById("a2mLabel").classList.add("disabled");
  document.getElementById("a2hButton").classList.add("disabled");
  document.getElementById("a2hLabel").classList.add("disabled");
  document.getElementById("a2bButton").classList.add("disabled");
  document.getElementById("a2bLabel").classList.add("disabled");
  document.getElementById("a2tButton").classList.add("disabled");
  document.getElementById("a2tLabel").classList.add("disabled");
  document.getElementById("a2DeadButton").classList.add("disabled");
  
  var axie2mouth = "-";
  var axie2horn = "-";
  var axie2back = "-";
  var axie2tail = "-";

  document.getElementById("a2mCounter").innerHTML = axie2mouth;
  document.getElementById("a2hCounter").innerHTML = axie2horn;
  document.getElementById("a2bCounter").innerHTML = axie2back;
  document.getElementById("a2tCounter").innerHTML = axie2tail;
}

function killAxie3 () {
  document.getElementById("a3mButton").classList.add("disabled");
  document.getElementById("a3mLabel").classList.add("disabled");
  document.getElementById("a3hButton").classList.add("disabled");
  document.getElementById("a3hLabel").classList.add("disabled");
  document.getElementById("a3bButton").classList.add("disabled");
  document.getElementById("a3bLabel").classList.add("disabled");
  document.getElementById("a3tButton").classList.add("disabled");
  document.getElementById("a3tLabel").classList.add("disabled");
  document.getElementById("a3DeadButton").classList.add("disabled");
  
  var axie3mouth = "-";
  var axie3horn = "-";
  var axie3back = "-";
  var axie3tail = "-";

  document.getElementById("a3mCounter").innerHTML = axie3mouth;
  document.getElementById("a3hCounter").innerHTML = axie3horn;
  document.getElementById("a3bCounter").innerHTML = axie3back;
  document.getElementById("a3tCounter").innerHTML = axie3tail;
}

// Calculator modal and functions
// Get the modal, btn and span
var modal = document.getElementById("calculatorModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Variables
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');

// Calculator Display
let realTimeScreenValue = [];

// To Clear


// Get value of any button clicked and display to the screen
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value);
            currentInput.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0;
        }
    });
});


