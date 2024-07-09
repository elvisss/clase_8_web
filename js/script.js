var mybutton = document.getElementById("myButton");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var resultado = document.getElementById("resultado");

var sumar = function () {
  // console.log('num1', num1.value, typeof num1.value);
  // console.log('num2', num2.value, typeof num2.value);
  var sumatoria = parseInt(num1.value) + parseInt(num2.value);
  // console.log(resultado);
  resultado.innerText = sumatoria;
  // document.getElementById('resultado').innerText = resultado;
};

mybutton.addEventListener("click", sumar);

//

var toggleBtn = document.getElementById("toggleBtn");
var content = document.getElementById("content");

toggleBtn.addEventListener("click", function () {
  if (content.style.display === "none") {
    content.style.display = "block";
    content.style.color = "blue";
  } else {
    content.style.display = "none";
  }
});
