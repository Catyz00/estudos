function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 0 && hora < 12){
        // BOM DIA!
        img.src = 'foto-1-png.png'
        document.body.style.background = "#f0cbb0"
    } else if (hora >= 12 && hora <= 18){
        // BOA TARDE!
        img.src = 'foto-2.png'
        document.body.style.background = "#d6b381"
    } else {
        // BOA NOITE!
        img.src = 'foto-3.png'
        document.body.style.background = "#317cb5"
    }
}