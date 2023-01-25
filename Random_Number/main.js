let x;
let y;
let z;

document.getElementById("rollBtn").onclick = function () {
  x = Math.floor(Math.random() * 6) + 1;
  y = Math.floor(Math.random() * 6) + 1;
  z = Math.floor(Math.random() * 6) + 1;

  document.getElementById("xlable").innerHTML = x;
  document.getElementById("ylable").innerHTML = y;
  document.getElementById("zlable").innerHTML = z;
};
