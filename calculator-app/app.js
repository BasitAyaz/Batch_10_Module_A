var displayInput = document.getElementById("displayInput");
function getVal(val) {
  displayInput.value += val;
}
function calulate() {
  displayInput.value = eval(displayInput.value);
}
function clearAll() {
  displayInput.value = "";
}
