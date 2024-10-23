function contar (){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var Passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || Passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERRO] Faltam dados!')
        
    }else{
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(Passo.value)
        if(p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1')
                p = 1
        }

        if(i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F4A8}`
            }
        }else{
            // contagem regressiva
            for (var c = i;  c >= f; c -= p){
                res.innerHTML += `${c} \u{1F4A8}`
            } 
        }
        res.innerHTML += `${c} \u{1F4A5}`
    }
}