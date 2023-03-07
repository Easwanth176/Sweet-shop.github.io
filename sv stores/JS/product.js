const myInput = document.getElementById("my-input");
function stepper(btn) {
  let id = btn.getAttribute("id");
  let min = myInput.getAttribute("min");
  let max = myInput.getAttribute("max");
  let step = myInput.getAttribute("step");
  let val = myInput.getAttribute("value");
  let calcstep = id == "increment" ? step * 1 : step * -1;
  let newvalue = parseInt(val) + calcstep;

  if (newvalue >= min && newvalue <= max) {
    myInput.setAttribute("value", newvalue);
  }
}
