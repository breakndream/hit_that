# Pre-work - *Hit this Xylophone Challenge*

**Hit this Xylophone Challenge** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sharon Kang**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/sordid-darkened-twilight

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented :  

List anything else that you can get done to improve the app!
* [X] Sound Effect being played when users push the start button

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:  
**Success Part 1**  
![Success1](https://user-images.githubusercontent.com/94573832/160299770-d740adc7-da0d-4a0c-8807-bf827b9230df.gif)   
**Success Part 2**  
![Success2](https://user-images.githubusercontent.com/94573832/160299792-61f3b941-b36c-4e50-b0d1-8fa1bb195489.gif)    
**Fail**  
<img src='http://g.recordit.co/Zn1SHPSWLd.gif' title='Video Walkthrough' width='600'/>

![](gif4-link-here)

## Reflection Questions
**1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.**   
Generating Random Numbers: https://www.w3schools.com/js/js_random.asp  
Source for a Gif embedded at the top of page: https://giphy.com/stickers/5fBH6zrcIiOs65zXCtG     
Source to make backshadows for h1: https://welearncode.com/rainbow-text/   
Source for adding a sound effect:  
https://soundeffect-lab.info/sound/anime/  
https://stackoverflow.com/questions/3910736/how-to-call-multiple-javascript-functions-in-onclick-event  
https://programminghead.com/how-to-play-audio-in-html-using-javascript/  

- For allowing users upto 3 mistakes, Joni Park helped me for basic ideas and structures

**2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)**    

- First, I encountered a challenge when I forgot to put the equal sign “=” to function playClueSequence(). ( for the conditions in for loop: (let i = 0; i <= progress)) Since I tried to type all the codes rather than copying and pasting, that was a little mistake but it took me only a few minutes to figure out what was wrong. 
- Second, when I was given to write codes for the function “guess”. I did other things but had a hard time writing the third if statement: “(progress == guessCounter)”. I guessed that the if statement acts like a placeholder because I couldn’t think of examples that progress doesn’t match with guessCounter and I have to write else statement for incrementing guessCounter.
- Third, for giving users 3 chances, I first tried to divide cases into 2 : when Life is greater than 1 or equals to 1. I was thinking of showing updates in Life by using another variable (decrementing it) but I realized that I can’t update HTML text dynamically. Eventually, I implemented this feature by getting an idea from the logic for implementing the Start and Stop button. After that, I also realized I had to update progress and call playClueSequence function again for every case except when the user loses to continue a game and restore life chances to 3 when startGame and stopGame are called.
- Fourth,  generating random numbers for making patterns, when I let pattern as a global variable outside the function, it didn’t work so I put pattern (an empty array) inside it  
pattern = [];
  for (let j = 0 ; j < 9; j ++ ){
    var number = Math.floor(Math.random() * 5) + 1
    pattern.push(number)
  }
- Finally, I tried to implement adding a sound effect when users push a start button. I wrote following codes in HTML while referencing the link that codepath gave us <audio src="Assets/myAudio.mp3" id="myAudio"></audio> <button id="startBtn" onclick="playMyAudio();startGame()">Start</button>  and this function (function playMyAudio(){ document.getElementById("myAudio").play();}) in Javascript. But eventually I wasn’t able to implement it so I wonder what the problem is.
- => After writing this, I gave myself one more day to implement this feature, and FINALLY I could do it. For <audio src=> I used url of the audio file instead of "Assets/myAudio.mp3", and it worked.


**3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)**   

- Before this project, I already had some experience in CSS and HTML but it was the first time for me to use Javascript. Javascript was like HTML or CSS but it was also like Java (typecasting) so I am curious how Javascript works specifically (its syntax, efficient procedural coding style).  Also, I couldn’t update values for Life in HTML so I am curious if there’s another way to update Life. (I’ve heard that React is dynamic so I want to know how dynamical frontend software would work to implement features) Since we got codes from the codepath during this project, all the codes were efficient and concise. But when I did my personal project, I overused paddings and margins in CSS to visualize design. I thought that was inefficient so I wonder how real-world software engineers work to manage their codes efficiently.      
  
**4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)**  
- First, I would definitely implement a feature that prevents users starting guesses before the computer ends its pattern and debug what caused an error for adding a sound effect(the latter part, I could do it after debugging). 
- Second, I would work on the last optional feature, adding a ticking clock. 
- Third, I would like to generate a few arrays that would make a simple song (like twinkle little star), make a few options and let users choose which music they want to play. 
- Finally, I am not sure if I can do this, but it would be nice to change the design of the cursor to a xylophone mallet because that would be fun.

## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/oRBJXsIsaB0)


## License

    Copyright Sharon Kang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
