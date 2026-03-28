var qtd=[0,0];
var valorProduto=[45,49];
var valorTotal=[0,0];

window.onload=function(){
    for(var i=0;i<valorProduto.length;i++){
    document.getElementById("preco"+i).innerHTML="R$"+valorProduto[i];
}
}





function adicionarItem(i){
    qtd[i]++; //incrementa a quantidade
    document.getElementById("quantidade"+i).innerHTML=qtd[i]; //atualiza a quantidade na tela

    var total=qtd[i]*valorProduto[i];
    document.getElementById("total"+i).innerHTML="R$"+total.toFixed(2);
    
    calcularTotal();

}
function removerItem(i){
    if(qtd[i]>0){ //veridica se a quantidade é maior que 0
        qtd[i]--; //decrementa a quantidade
        document.getElementById("quantidade"+i).innerHTML=qtd[i]; //atualiza a quantidade na tela

        var total=qtd[i]*valorProduto[i];
        document.getElementById("total"+i).innerHTML="R$"+total.toFixed(2);

        calcularTotal();
    }
}

function calcularTotal(){
    var total=0;
    for(var i=0;i<qtd.length;i++){
        total+=qtd[i]*valorProduto[i];
    }
    document.getElementById("valorTotalCompra").innerHTML=total.toFixed(2);
}
