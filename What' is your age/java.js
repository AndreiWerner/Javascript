function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')

    if (fano.value.lenght == 0 ||Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('resex')
        var idade = ano - Number(fano.value)
        
        
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')

        // Identificação idade HOMEM

        var genero = '' 
        if (fsex[0].checked) {
        genero = 'Homem'
            if (idade >=0 && idade < 18){
                //criança
                img.setAttribute('src','img/young-boy.png')
            } else if ( idade < 50){
                //Adulto
                img.setAttribute("src", "img/man-adult.png")
            }else {
                //Idoso
                img.setAttribute('src', 'img/old-man.png')
            }
            
        }else if (fsex[1].checked) {
         genero = 'mulher'
            if (idade >= 0 && idade <=18){
                //Criança
                img.setAttribute('src', 'img/young-girl.png')
            }else if (idade >= 21 && idade < 50) {
                //Adulto
                img.setAttribute('src','img/woman-adult.png')
            }
            else{
                //Idoso
                img.setAttribute('src','img/old-woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
