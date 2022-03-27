// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; // how long to pause in between clues
const nextClueWaitTime = 1000; // how long to wait before starting playback of the clue sequence
var life = 3;

//Global Variables

var pattern = [];

var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;

function playMyAudio(){
  document.getElementById("myAudio").play();
}

function startGame() {
  
  pattern = [];
  for (let j = 0 ; j < 9; j ++ ){
    var number = Math.floor(Math.random() * 5) + 1
    pattern.push(number)
  }
  
  clueHoldTime = 1000;
  //initialize game variables
  life = 3;
  document.getElementById("life0").classList.add("hidden");
  document.getElementById("life3").classList.remove("hidden");
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  
  // Updata life to 3 & show Life:3
  life = 3;
  document.getElementById("life0").classList.add("hidden");
  document.getElementById("life1").classList.add("hidden");
  document.getElementById("life2").classList.add("hidden");
  document.getElementById("life3").classList.remove("hidden");
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  
                                                   
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 522.6,
  5: 658,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}



// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  // context.resume() // disappeared?
  let delay = nextClueWaitTime; // set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    //for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    
    clueHoldTime *= 0.92
    
    delay += clueHoldTime; // why isn't there a semicolon after this?
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost ಥ_ಥ");
}

function winGame() {
  stopGame();
  alert("Game Over. You Won! Congrats (❁´◡`❁)");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }
  
  if (btn == pattern[guessCounter]) {
    // Is guess correct?
    if (progress == guessCounter) {
      // is turn over?
      if (progress == pattern.length - 1) {
        //is this the last turn?
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      // increment guessCounter
      guessCounter++;
    }
  } else {
      if (life === 3){
        life -= 1;
        document.getElementById("life3").classList.add("hidden");
        document.getElementById("life2").classList.remove("hidden");
        alert("lost 1 life! 😈");
        progress++;
        playClueSequence();
      } else if (life === 2){
        life -= 1;
        document.getElementById("life2").classList.add("hidden");
        document.getElementById("life1").classList.remove("hidden");
        alert("ONLY ONE MORE LIFE 😈 😈 😈");
        progress++;
        playClueSequence();
      } else if (life === 1) {
        life -= 1;
        document.getElementById("life1").classList.add("hidden");
        document.getElementById("life0").classList.remove("hidden");
        loseGame();
      }
  }
}
