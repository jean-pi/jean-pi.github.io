export function cuentaRegresiva (nodo,fechaLimite,mensajeFinal){
    const $nodoMuestraContador = document.querySelector(nodo),
    timeLimiteMilisegundos = new Date(fechaLimite).getTime();
    // se pasa la fecha a un formato entendible para js y se lo 
    // pasa a milisegundos xon getTime() para hacer los calculos 

    let contadorTime = setInterval(() => {
        // la variable timeActual se declara dentro del setinterval para que cada seguyndo muestra la hora actual actualizada
        let timeActual = new Date().getTime(),
        // debia restar el el timeCtual al TimeLimite no viseversa
        timeFaltante = timeLimiteMilisegundos - timeActual,
        dias    = Math.floor ( timeFaltante / (1000*60*60*24) ),
        // este esta bien curioso con este calculo puede tener el tiempo que falta para acabar el dia
        // floor es para no permitir decimales
        // le concateno un "0" para que cuando sea un numeno de una cifra se muestre "09" o "07"
        // ojo al concatenar un valor en cadena de texto el valor por completo se pasa a cadena de texto
        // el slice se aplica a la cadena de texto y evita que se muestre el cero cuando esten don cifras ejm "012"
        horas   = ("0" + Math.floor (timeFaltante % (1000*60*60*24) / (1000*60*60))).slice(-2),
        minutos = ("0" + Math.floor (timeFaltante % (1000*60*60) / (1000*60))).slice(-2),
        segundos= ("0" + Math.floor (timeFaltante % (1000*60) / (1000))).slice(-2);
        
        $nodoMuestraContador.innerHTML=`<p>faltan ${dias} dias,${horas} horas, ${minutos} minutos y ${segundos} segundos para tu cumpleaños </p>`
        
        if( timeFaltante < 0){
            clearInterval(contadorTime)
            $nodoMuestraContador.innerHTML = `<p>${mensajeFinal}</p>`
        }
    }, 1000);


}