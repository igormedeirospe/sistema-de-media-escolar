
var ndtexto = document.getElementById('none');
function mostrarmedia(){
    var n1 = document.getElementById('nota1');
    var nn1 = parseInt(n1.value);
    var n2 = document.getElementById('nota2');
    var nn2 = parseInt(n2.value);

   var media = (nn1 + nn2) /2;
   console.log(media)
   if(media >= 7){
    ndtexto.innerHTML = "Você foi aprovado com media " + media + " ";
}else{
    ndtexto.innerHTML = "Você foi reprovado com media " + media + " "}
}
