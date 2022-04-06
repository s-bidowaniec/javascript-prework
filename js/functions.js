const printMessage = (msg, elementId = "messages") => {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById(elementId).appendChild(div);
};

const clearMessages = (elementId = "messages") => {
  document.getElementById(elementId).innerHTML = "";
};
