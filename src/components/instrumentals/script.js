import tom_1 from "../../assets/audio/instrument sound/tom-1.mp3";
import tom_2 from "../../assets/audio/instrument sound/tom-2.mp3";
import tom_3 from "../../assets/audio/instrument sound/tom-3.mp3";
import tom_4 from "../../assets/audio/instrument sound/tom-4.mp3";
import snare from "../../assets/audio/instrument sound/snare.mp3";
import kick_bass from "../../assets/audio/instrument sound/kick-bass.mp3";
import crash from "../../assets/audio/instrument sound/crash.mp3";

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
    case "w":
      audio = new Audio(tom_1);
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

    case "j":
      audio = new Audio(snare);
      audio.play();
      break;

    case "k":
      audio = new Audio(kick_bass);
      audio.play();
      break;

    case "l":
      audio = new Audio(crash);
      audio.play();
      break;

    default:
      break;
  }
}

export function keySound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio(tom_1);
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

    case "j":
      audio = new Audio(snare);
      audio.play();
      break;

    case "k":
      audio = new Audio(kick_bass);
      audio.play();
      break;

    case "l":
      audio = new Audio(crash);
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
