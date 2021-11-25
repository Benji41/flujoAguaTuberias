function required() {
  var iD = document.getElementById("diam").value;
  var iP = document.getElementById("pen").value;
  var iR = document.getElementById("rugo").value;

  if (iD != "" && iP != "" && iR != "") {
    var Rh = iD / 4;
    document.getElementById("radio").value = Rh;
    var v = (1 / iR) * Math.pow(Rh, 2 / 3) * Math.pow(iP, 1 / 2);
    document.getElementById("vel").value = v;

    var a = (4 * Math.PI * Math.pow(iD, 2)) / 4;
    document.getElementById("area").value = a;

    var gasto = a * v;
    document.getElementById("gasto").value = gasto;
  } else {
    if (iD == "") {
      alert("Tiene que llenar el campo de Diametro");
    }
    if (iP == "") {
      alert("Tiene que llenar el campo de Pendiente");
    }
    if (iR == "") {
      alert("Tiene que llenar el campo de Numero de Rugosidad");
    }
  }
}
