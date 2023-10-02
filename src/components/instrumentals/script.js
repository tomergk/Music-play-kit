import bass_guitar from "../../assets/audio/instrument sound/guitar/guitar_bass.mp3";
import guitar_classic from "../../assets/audio/instrument sound/guitar/guitar_classic.mp3";
import guitar1 from "../../assets/audio/instrument sound/guitar/guitar1.mp3";
import guitar2 from "../../assets/audio/instrument sound/guitar/guitar2.mp3";
import guitar3 from "../../assets/audio/instrument sound/guitar/guitar3.mp3";
import guitar4 from "../../assets/audio/instrument sound/guitar/guitar4.mp3";

import tom_1 from "../../assets/audio/instrument sound/drum/tom-1.mp3";
import tom_2 from "../../assets/audio/instrument sound/drum/tom-2.mp3";
import tom_3 from "../../assets/audio/instrument sound/drum/tom-3.mp3";
import tom_4 from "../../assets/audio/instrument sound/drum/tom-4.mp3";
import snare from "../../assets/audio/instrument sound/drum/snare.mp3";
import kick_bass from "../../assets/audio/instrument sound/drum/kick-bass.mp3";

import crash from "../../assets/audio/instrument sound/drum/crash.mp3";
import beam_lazer from "../../assets/audio/instrument sound/beam-lazer.mp3";
import clap from "../../assets/audio/instrument sound/clap.mp3";
import reverse from "../../assets/audio/instrument sound/reverse.mp3";
import violin from "../../assets/audio/instrument sound/violin.mp3";
import fart from "../../assets/audio/instrument sound/fart.mp3";



export function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey.toLowerCase());
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

export function voice(letter) {
  var audio;
  switch (letter) {

    case "q":
      audio = new Audio(bass_guitar);
      audio.play();
      break;

    case "w":
      audio = new Audio(guitar_classic);
      audio.play();
      break;

    case "e":
      audio = new Audio(guitar1);
      audio.play();
      break;

    case "r":
      audio = new Audio(guitar2);
      audio.play();
      break;

    case "t":
      audio = new Audio(guitar3);
      audio.play();
      break;

    case "y":
      audio = new Audio(guitar4);
      audio.play();
      break;

    case "a":
      audio = new Audio(tom_1);
      audio.play();
      break;

    case "s":
      audio = new Audio(tom_2);
      audio.play();
      break;

    case "d":
      audio = new Audio(tom_4);
      audio.play();
      break;

    case "f":
      audio = new Audio(tom_3);
      audio.play();
      break;

    case "g":
      audio = new Audio(snare);
      audio.play();
      break;

    case "h":
      audio = new Audio(kick_bass);
      audio.play();
      break;

    case "z":
      audio = new Audio(crash);
      audio.play();
      break;

    case "x":
      audio = new Audio(beam_lazer);
      audio.play();
      break;

    case "c":
      audio = new Audio(clap);
      audio.play();
      break;

    case "v":
      audio = new Audio(reverse);
      audio.play();
      break;

    case "b":
      audio = new Audio(violin);
      audio.play();
      break;

    case "n":
      audio = new Audio(fart);
      audio.play();
      break;

    default:
      break;
  }
}

export function keySound(key) {
  var audio;
  switch (key) {

    case "q":
      audio = new Audio(bass_guitar);
      audio.play();
      break;

    case "w":
      audio = new Audio(tom_1);
      audio.play();
      break;

    case "e":
      audio = new Audio(guitar1);
      audio.play();
      break;

    case "r":
      audio = new Audio(guitar2);
      audio.play();
      break;

    case "t":
      audio = new Audio(guitar3);
      audio.play();
      break;

    case "y":
      audio = new Audio(guitar4);
      audio.play();
      break;

    case "a":
      audio = new Audio(tom_2);
      audio.play();
      break;

    case "s":
      audio = new Audio(tom_3);
      audio.play();
      break;

    case "d":
      audio = new Audio(tom_4);
      audio.play();
      break;

    case "f":
      audio = new Audio(tom_3);
      audio.play();
      break;

    case "g":
      audio = new Audio(snare);
      audio.play();
      break;

    case "h":
      audio = new Audio(kick_bass);
      audio.play();
      break;

    case "z":
      audio = new Audio(crash);
      audio.play();
      break;

    case "x":
      audio = new Audio(beam_lazer);
      audio.play();
      break;

    case "c":
      audio = new Audio(clap);
      audio.play();
      break;

    case "v":
      audio = new Audio(reverse);
      audio.play();
      break;

    case "b":
      audio = new Audio(violin);
      audio.play();
      break;

    case "n":
      audio = new Audio(fart);
      audio.play();
      break;

    default:
      break;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Function to trigger sound and animation when click
  for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      if (/^[a-zA-Z]$/.test(this.innerHTML)) {
        voice(this.innerHTML.toLowerCase());
        buttonAnimation(this.innerHTML.toLowerCase());
      }
    });
  }

  // Function to trigger sound to image when keypress
  document.addEventListener("keydown", function (event) {
    if (/^[a-zA-Z]$/.test(event.key)) {
      keySound(event.key.toLowerCase());
      buttonAnimation(event.key.toLowerCase());
    }
  });
});
