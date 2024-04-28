var selectedButton = ""
var uniqueMessageEmotes = ["Kappa", "PogChamp", "PixelBob", "LUL", "KonCha", "TPFunfun", "KAPOW", "Jebaited"]
var prevUniqueEmoteIndex = 0

window.onload = (event) => {
  document.getElementById("chat-message").value = "";
  document.getElementById("num-of-presses").value = "1";
};

document.getElementById('num-of-presses').addEventListener('change', function () {
  setMessage()
});

function press_button(button) {
  selectedButton = button
  document.getElementById("selected-button").innerHTML = button;
  document.getElementById("chat-message").value = parseMessage(button);
}

function wrapAround(number, min, max) {
  if (number < min) {
      return max;
  } else if (number > max) {
      return min;
  } else {
      return number;
  }
}

function parseMessage(button) {
  var numOfPresses = document.getElementById("num-of-presses").value;
  var messageList = []
  for (let step = 0; step < numOfPresses; step++) {
    messageList.push(button)
  }

  console.log(messageList)
  return messageList.join(" ");
}

function setMessage() {
  if (selectedButton != "") {
    document.getElementById("chat-message").value = parseMessage(selectedButton);
  }
}

function copyText() {
  var newUniqueEmoteIndex = wrapAround(prevUniqueEmoteIndex + 1, 0, uniqueMessageEmotes.length - 1)
  prevUniqueEmoteIndex = wrapAround(prevUniqueEmoteIndex + 1, 0, uniqueMessageEmotes.length - 1)

  var copyText = document.getElementById("chat-message").value + " " + uniqueMessageEmotes[newUniqueEmoteIndex];

  navigator.clipboard.writeText(copyText);
  console.log("copying", copyText)
  setCopiedIndicator();
}


function setCopiedIndicator() {
  document.getElementById("copied-indicator").innerHTML = "Copied!";
  setTimeout(resetCopiedIndicator, 1000.0)
}

function resetCopiedIndicator() {
  document.getElementById("copied-indicator").innerHTML = "";
}
