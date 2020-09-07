function carregar() {
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("img");
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = "Agora são " + hora + " horas";
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = "imgs/manha.jpg"
        document.body.style.background = '#ADD8E6';
    }else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = "imgs/tarde.jpg"
        document.body.style.background = '#D2691E';
    }else{
        //Boa noite
        img.src = "imgs/noite.jpg"
        document.body.style.background = '#363636';
    }
}