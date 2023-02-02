//window.onload =  function(){
window.addEventListener("load", function(){
    var btnPrint = document.getElementById("btn-print");
        btnPrint.onclick =  function() {
        //var btnPrint = document.getElementById("btn-print");
        var x = prompt("x의 값",0);
        var y = prompt("x의 값",0);

        x = parseInt(x);
        y = parseInt(y);
        btnPrint.value = x+y;
        //span1.innerText = x+y;
    };
});