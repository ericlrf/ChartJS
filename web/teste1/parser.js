function gerarDados(myLineChart, data1) {
//    var arquivo = "cd_catalog.xml";
////    var arquivo = "ipca2.xml";
//    xmlhttp = new XMLHttpRequest();
//    xmlhttp.open("GET", arquivo, true);
//    xmlhttp.send(null);
//    xmlDoc = xmlhttp.responseXML;
//    alert(xmlDoc.childNodes);
    if (document.getElementById("grande").checked){
        document.getElementById("canvas").setAttribute("height", 800);
        document.getElementById("canvas").setAttribute("width", 800);
    }
    if (document.getElementById("alta").checked){
        frequencia = 500;
    }
    if (document.getElementById("acumulado")){
//        myLineChart.Line(data1);
    }
}
