function selecionaItem(produto){
    let produtos = produto.parentNode

    produtos.childNodes.forEach(function(p){
        if(p.classList){
             if(p.classList.contains('selecionado')){
                    p.classList.remove('selecionado')
                    icone = p.querySelector('ion-icon') 
                    if(icone){
                        icone.style.display = 'none'
                    }  
                }
            }
        })
    produto.classList.add("selecionado")
    produto.querySelector('ion-icon').style.display = 'block'
    
    if(contaSelecionados() == 3){
        let botao = document.querySelector('button') 
            botao.disabled = false;
            botao.innerHTML = "Fechar Pedido"

    }
}
function contaSelecionados(){
    let selecionados = document.querySelectorAll('.selecionado')

    return selecionados.length
}