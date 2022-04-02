function printMessage(msg, elementId = "messages") {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById(elementId).appendChild(div);
}

function clearMessages(elementId = "messages") {
  document.getElementById(elementId).innerHTML = "";
}
