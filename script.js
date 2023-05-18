function myFunction() {
  let x = document.getElementById("inputSatu").value;
  let y = document.getElementById("inputDua").value;
  let z = parseInt(x) + parseInt(y);
  document.getElementById("output").textContent = z;
  console.log(z);
}

function setToInput1(val) {
  document.getElementById("inputSatu").value = val;
}
function setToInput2(val) {
  document.getElementById("inputDua").value = val;
}
