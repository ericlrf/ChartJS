var interador = 4, temp = 4, frequencia = 2000, myLineChart;
var arrayDiaMesAno = ["01/01/1991", "01/02/1991", "01/03/1991", "01/04/1991", "01/05/1991", "01/06/1991", "01/07/1991", "01/08/1991", "01/09/1991", "01/10/1991", "01/11/1991", "01/12/1991", "01/01/1992", "01/02/1992", "01/03/1992", "01/04/1992", "01/05/1992", "01/06/1992", "01/07/1992", "01/08/1992", "01/09/1992", "01/10/1992", "01/11/1992", "01/12/1992", "01/01/1993", "01/02/1993", "01/03/1993", "01/04/1993", "01/05/1993", "01/06/1993", "01/07/1993", "01/08/1993", "01/09/1993", "01/10/1993", "01/11/1993", "01/12/1993", "01/01/1994", "01/02/1994", "01/03/1994", "01/04/1994", "01/05/1994", "01/06/1994", "01/07/1994", "01/08/1994", "01/09/1994", "01/10/1994", "01/11/1994", "01/12/1994", "01/01/1995", "01/02/1995", "01/03/1995", "01/04/1995", "01/05/1995", "01/06/1995", "01/07/1995", "01/08/1995", "01/09/1995", "01/10/1995", "01/11/1995", "01/12/1995", "01/01/1996", "01/02/1996", "01/03/1996", "01/04/1996", "01/05/1996", "01/06/1996", "01/07/1996", "01/08/1996", "01/09/1996", "01/10/1996", "01/11/1996", "01/12/1996", "01/01/1997", "01/02/1997", "01/03/1997", "01/04/1997", "01/05/1997", "01/06/1997", "01/07/1997", "01/08/1997", "01/09/1997", "01/10/1997", "01/11/1997", "01/12/1997", "01/01/1998", "01/02/1998", "01/03/1998", "01/04/1998", "01/05/1998", "01/06/1998", "01/07/1998", "01/08/1998", "01/09/1998", "01/10/1998", "01/11/1998", "01/12/1998", "01/01/1999", "01/02/1999", "01/03/1999", "01/04/1999", "01/05/1999", "01/06/1999", "01/07/1999", "01/08/1999", "01/09/1999", "01/10/1999", "01/11/1999", "01/12/1999", "01/01/2000", "01/02/2000", "01/03/2000", "01/04/2000", "01/05/2000", "01/06/2000", "01/07/2000", "01/08/2000", "01/09/2000", "01/10/2000", "01/11/2000", "01/12/2000", "01/01/2001", "01/02/2001", "01/03/2001", "01/04/2001", "01/05/2001", "01/06/2001", "01/07/2001", "01/08/2001", "01/09/2001", "01/10/2001", "01/11/2001", "01/12/2001", "01/01/2002", "01/02/2002", "01/03/2002", "01/04/2002", "01/05/2002", "01/06/2002", "01/07/2002", "01/08/2002", "01/09/2002", "01/10/2002", "01/11/2002", "01/12/2002", "01/01/2003", "01/02/2003", "01/03/2003", "01/04/2003", "01/05/2003", "01/06/2003", "01/07/2003", "01/08/2003", "01/09/2003", "01/10/2003", "01/11/2003", "01/12/2003", "01/01/2004", "01/02/2004", "01/03/2004", "01/04/2004", "01/05/2004", "01/06/2004", "01/07/2004", "01/08/2004", "01/09/2004", "01/10/2004", "01/11/2004", "01/12/2004", "01/01/2005", "01/02/2005", "01/03/2005", "01/04/2005", "01/05/2005", "01/06/2005", "01/07/2005", "01/08/2005", "01/09/2005", "01/10/2005", "01/11/2005", "01/12/2005", "01/01/2006", "01/02/2006", "01/03/2006", "01/04/2006", "01/05/2006", "01/06/2006", "01/07/2006", "01/08/2006", "01/09/2006", "01/10/2006", "01/11/2006", "01/12/2006", "01/01/2007", "01/02/2007", "01/03/2007", "01/04/2007", "01/05/2007", "01/06/2007", "01/07/2007", "01/08/2007", "01/09/2007", "01/10/2007", "01/11/2007", "01/12/2007", "01/01/2008", "01/02/2008", "01/03/2008", "01/04/2008", "01/05/2008", "01/06/2008", "01/07/2008", "01/08/2008", "01/09/2008", "01/10/2008", "01/11/2008", "01/12/2008", "01/01/2009", "01/02/2009", "01/03/2009", "01/04/2009", "01/05/2009", "01/06/2009", "01/07/2009", "01/08/2009", "01/09/2009", "01/10/2009", "01/11/2009", "01/12/2009", "01/01/2010", "01/02/2010", "01/03/2010", "01/04/2010", "01/05/2010", "01/06/2010", "01/07/2010", "01/08/2010", "01/09/2010", "01/10/2010", "01/11/2010", "01/12/2010", "01/01/2011", "01/02/2011", "01/03/2011", "01/04/2011", "01/05/2011", "01/06/2011", "01/07/2011", "01/08/2011", "01/09/2011", "01/10/2011", "01/11/2011", "01/12/2011", "01/01/2012", "01/02/2012", "01/03/2012", "01/04/2012", "01/05/2012", "01/06/2012", "01/07/2012", "01/08/2012", "01/09/2012", "01/10/2012", "01/11/2012", "01/12/2012", "01/01/2013", "01/02/2013", "01/03/2013", "01/04/2013", "01/05/2013", "01/06/2013", "01/07/2013", "01/08/2013", "01/09/2013", "01/10/2013", "01/11/2013", "01/12/2013", "01/01/2014", "01/02/2014", "01/03/2014", "01/04/2014", "01/05/2014", "01/06/2014", "01/07/2014", "01/08/2014", "01/09/2014", "01/10/2014", "01/11/2014", "01/12/2014", "01/01/2015", "01/02/2015", "01/03/2015"];
var arrayAcumulado = [20.75, 45.77, 63.15, 71.29, 84.02, 104.61, 130, 165.95, 207.52, 269.73, 362.94, 472.7, 25.94, 56.57, 90.08, 127.96, 184.63, 242.15, 316.84, 409.13, 534.53, 694.69, 873.41, 1119.1, 30.35, 62.91, 107.32, 164.85, 238.19, 339.88, 475.02, 664.54, 937.41, 1289.3, 1783.3, 2477.15, 41.31, 98.22, 182.96, 303.73, 481.49, 757.29, 815.93, 832.97, 847.24, 872.06, 899.37, 916.46, 1.7, 2.74, 4.33, 6.87, 9.72, 12.2, 14.84, 15.98, 17.13, 18.78, 20.53, 22.41, 1.34, 2.38, 2.74, 4.04, 5.31, 6.56, 7.74, 8.22, 8.38, 8.7, 9.05, 9.56, 1.18, 1.69, 2.21, 3.1, 3.53, 4.09, 4.31, 4.29, 4.36, 4.6, 4.77, 5.22, 0.71, 1.17, 1.52, 1.76, 2.27, 2.29, 2.17, 1.65, 1.42, 1.44, 1.32, 1.65, 0.7, 1.76, 2.88, 3.45, 3.76, 3.96, 5.09, 5.68, 6.01, 7.27, 8.29, 8.94, 0.62, 0.75, 0.97, 1.4, 1.41, 1.64, 3.28, 4.63, 4.87, 5.02, 5.35, 5.97, 0.57, 1.03, 1.42, 2, 2.42, 2.96, 4.32, 5.06, 5.35, 6.22, 6.98, 7.67, 0.52, 0.88, 1.49, 2.3, 2.51, 2.94, 4.17, 4.85, 5.6, 6.98, 10.22, 12.53, 2.25, 3.86, 5.13, 6.15, 6.8, 6.64, 6.85, 7.22, 8.05, 8.37, 8.74, 9.3, 0.76, 1.37, 1.85, 2.23, 2.75, 3.48, 4.42, 5.14, 5.49, 5.95, 6.68, 7.6, 0.58, 1.17, 1.79, 2.68, 3.18, 3.16, 3.42, 3.59, 3.95, 4.73, 5.31, 5.69, 0.59, 1, 1.43, 1.65, 1.75, 1.54, 1.73, 1.78, 2, 2.33, 2.65, 3.14, 0.44, 0.88, 1.26, 1.51, 1.8, 2.08, 2.32, 2.8, 3, 3.3, 3.69, 4.46, 0.54, 1.03, 1.52, 2.08, 2.88, 3.63, 4.19, 4.48, 4.76, 5.23, 5.61, 5.9, 0.48, 1.03, 1.23, 1.72, 2.2, 2.57, 2.81, 2.97, 3.21, 3.5, 3.93, 4.31, 0.75, 1.53, 2.06, 2.65, 3.09, 3.09, 3.1, 3.14, 3.61, 4.39, 5.25, 5.92, 0.83, 1.64, 2.44, 3.24, 3.72, 3.88, 4.04, 4.42, 4.98, 5.43, 5.97, 6.5, 0.56, 1.01, 1.22, 1.87, 2.24, 2.32, 2.76, 3.18, 3.77, 4.38, 5.01, 5.84, 0.86, 1.47, 1.94, 2.5, 2.88, 3.15, 3.18, 3.43, 3.79, 4.38, 4.95, 5.91, 0.55, 1.24, 2.18, 2.86, 3.33, 3.75, 3.76, 4.02, 4.61, 5.05, 5.58, 6.41, 1.24, 2.48, 3.83];
var arrayMensal = [20.75, 20.72, 11.92, 4.99, 7.43, 11.19, 12.41, 33.71, 20.23, 25.21, 23.71, 25.94, 24.32, 21.4, 19.93, 24.86, 20.21, 21.83, 22.14, 24.63, 25.24, 22.49, 25.24, 30.35, 24.98, 27.26, 27.75, 27.69, 30.07, 30.72, 32.96, 35.69, 33.92, 35.56, 36.84, 41.31, 40.27, 42.75, 42.68, 44.03, 47.43, 6.84, 1.86, 1.53, 2.62, 2.81, 1.71, 1.7, 1.02, 1.55, 2.43, 2.67, 2.26, 2.36, 0.99, 0.99, 1.41, 1.47, 1.56, 1.34, 1.03, 0.35, 1.26, 1.22, 1.19, 1.11, 0.44, 0.15, 0.3, 0.32, 0.47, 1.18, 0.5, 0.51, 0.88, 0.41, 0.54, 0.22, -0.02, 0.06, 0.23, 0.17, 0.43, 0.71, 0.46, 0.34, 0.24, 0.5, 0.02, -0.12, -0.51, -0.22, 0.02, -0.12, 0.33, 0.7, 1.05, 1.1, 0.56, 0.3, 0.19, 1.09, 0.56, 0.31, 1.19, 0.95, 0.6, 0.62, 0.13, 0.22, 0.42, 0.01, 0.23, 1.61, 1.31, 0.23, 0.14, 0.32, 0.59, 0.57, 0.46, 0.38, 0.58, 0.41, 0.52, 1.33, 0.7, 0.28, 0.83, 0.71, 0.65, 0.52, 0.36, 0.6, 0.8, 0.21, 0.42, 1.19, 0.65, 0.72, 1.31, 3.02, 2.1, 2.25, 1.57, 1.23, 0.97, 0.61, -0.15, 0.2, 0.34, 0.78, 0.29, 0.34, 0.52, 0.76, 0.61, 0.47, 0.37, 0.51, 0.71, 0.91, 0.69, 0.33, 0.44, 0.69, 0.86, 0.58, 0.59, 0.61, 0.87, 0.49, -0.02, 0.25, 0.17, 0.35, 0.75, 0.55, 0.36, 0.59, 0.41, 0.43, 0.21, 0.1, -0.21, 0.19, 0.05, 0.21, 0.33, 0.31, 0.48, 0.44, 0.44, 0.37, 0.25, 0.28, 0.28, 0.24, 0.47, 0.18, 0.3, 0.38, 0.74, 0.54, 0.49, 0.48, 0.55, 0.79, 0.74, 0.53, 0.28, 0.26, 0.45, 0.36, 0.28, 0.48, 0.55, 0.2, 0.48, 0.47, 0.36, 0.24, 0.15, 0.24, 0.28, 0.41, 0.37, 0.75, 0.78, 0.52, 0.57, 0.43, 0, 0.01, 0.04, 0.45, 0.75, 0.83, 0.63, 0.83, 0.8, 0.79, 0.77, 0.47, 0.15, 0.16, 0.37, 0.53, 0.43, 0.52, 0.5, 0.56, 0.45, 0.21, 0.64, 0.36, 0.08, 0.43, 0.41, 0.57, 0.59, 0.6, 0.79, 0.86, 0.6, 0.47, 0.55, 0.37, 0.26, 0.03, 0.24, 0.35, 0.57, 0.54, 0.92, 0.55, 0.69, 0.92, 0.67, 0.46, 0.4, 0.01, 0.25, 0.57, 0.42, 0.51, 0.78, 1.24, 1.22, 1.32];
var dadosMensais = {
    labels: ["01/01/1991", "01/02/1991", "01/03/1991", "01/04/1991"],
    datasets: [{
            label: "Porcentagem mensal",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [20.75, 20.72, 11.92, 4.99]
        }]};
var dadosAcumulados = {
    labels: ["01/01/1991", "01/02/1991", "01/03/1991", "01/04/1991"],
    datasets: [{
            label: "Acumulado ao ano",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [20.75, 45.77, 63.15, 71.29]
        }]};
//function mudarSerie() {
//    document.getElementById("acumulado").addEventListener(onchange, init()());
//    alert(this.checked);
//}
function timer() {
        myLineChart.addData(arrayMensal[interador], arrayDiaMesAno[interador]);
        myLineChart.removeData(interador - temp);
        interador += 1;
}
function init() {
    var ctx = document.getElementById("canvas").getContext("2d");
    myLineChart = new Chart(ctx).Line(dadosMensais);
    var temporizador = setInterval(function() {timer()}, frequencia);
}
onload = init;