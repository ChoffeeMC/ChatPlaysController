var selectedButton = ""
var prevUUIDEmote = "Kappa"

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

function parseMessage(button) {
  var numOfPresses = document.getElementById("num-of-presses").value;
  var messageList = []
  for (let step = 0; step < numOfPresses; step++) {
    messageList.push(button)
  }

  if (prevUUIDEmote == "Kappa") {
    messageList.push("PogChamp")
    prevUUIDEmote = "PogChamp"
  }
  else {
    messageList.push("Kappa")
    prevUUIDEmote = "Kappa"
  }

  console.log(messageList)
  return messageList.join(" ");
}

function setMessage() {
  console.log("test", selectedButton)
  if (selectedButton != "") {
    document.getElementById("chat-message").value = parseMessage(selectedButton);
  }
}

function copyText() {
  console.log("copying")
  var copyText = document.getElementById("chat-message");

  navigator.clipboard.writeText(copyText.value);
  console.log("copying", copyText.value)
  setCopiedIndicator();
}


function setCopiedIndicator() {
  document.getElementById("copied-indicator").innerHTML = "Copied!";
  setTimeout(resetCopiedIndicator, 1000.0)
}

function resetCopiedIndicator() {
  document.getElementById("copied-indicator").innerHTML = "";
}
