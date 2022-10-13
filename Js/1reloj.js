

export function reloj (agujaHour,agujaMinute,agujaSecond){


    let clockInterval = setInterval(() => {
        calcularHora();
        calcularMinutos();
        calcularSegundos();
    },1000);

    function linearMap(value, min, max, newMin, newMax) {
        return newMin + (newMax - newMin) * (value - min) / (max - min);
    }

    function calcularHora(){
        let hours = new Date().getHours()-12;
        let hoGrados = linearMap( hours, 0 , 12 , 0 , 360);
        document.querySelector(agujaHour).style.transform = `rotate(${hoGrados}deg)`;
    }
    function calcularMinutos(){
        let minutes = new Date().getMinutes()
        let miGrados = linearMap(minutes , 0 , 60 , 0 , 360);
        document.querySelector(agujaMinute).style.transform =`rotate(${miGrados}deg)`
    }
    function calcularSegundos(){
        let seconds = new Date().getSeconds()
        let seGrados = linearMap(seconds , 0 , 60 , 0 , 360);
        document.querySelector(agujaSecond).style.transform =`rotate(${seGrados}deg)`
    }

}

