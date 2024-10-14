function carregar() { 
    var img = document.getElementById('imsg')
    var img = document.getElementById ('img')
    //var data = new Date()
    //var hora = data.getHours()
   imsg.innerHTML = `Agora são ${hora} horas`
    var hora = 7
    if (hora >= 0 &&  hora < 12) {
        //Bom dia
        img.src='imgs/pexels-gareth-davies-230510-910411.jpg' 
        document.body.style.background = 'lightgreen'
        
    } else if (hora >= 12 && hora < 18) {           
        //boa tarde
        img.src='imgs/tarde.jpg'
        document.body.style.background = 'white'
    }
    else {
        //Boa noite
        img.src='imgs/noite.jpg'
        document.body.style.background = 'black'
    }
    
}