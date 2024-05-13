function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'homem';
            if (idade >=0 && idade < 10){
                // crianca
                img.setAttribute('src', 'foto-criancaH.png');
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovemH.png');
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'foto_adultoH.png');
            }else { 
                //idoso 
                img.setAttribute('src', 'foto-idoso.png');
            }
        } else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade >=0 && idade < 10){
                // crianca
                img.setAttribute('scr', 'foto_criancaM.png');
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovemM.png');
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'foto-adutoM.png');
            }else { 
                //idoso 
                img.setAttribute('src', 'foto_idosa.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = (`Detectamos ${genero} com ${idade} anos.`);
        res.appendChild(img);
    }
}