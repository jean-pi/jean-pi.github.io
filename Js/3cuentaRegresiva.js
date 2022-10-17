export function cuentaRegresiva (nodo,fechaLimite,mensajeFinal){
    const $nodoMuestraContador = document.querySelector(nodo),
    timeLimiteMilisegundos = new Date(fechaLimite).getTime();

    let contadorTime = setInterval(() => {
        let timeActual = new Date().getTime(),
        timeFaltante = timeLimiteMilisegundos - timeActual,
        dias    = Math.floor ( timeFaltante / (1000*60*60*24) ),
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