
const n = navigator,
    ua = navigator.userAgent
export default function detencionDeDispositivos(id){
    const $div = document.querySelector(id)
    // el objeto "navigator" tiene mucha informacion interesante
    // por ejemplo tiene una que es UsarAgent la cual detecta en que dispositivos estamos
    // console.info(navigator)
    // console.log(navigator.userAgent)




    
    const isSmartPhone = {
        android: () => ua.match(/android/i), // match devolvera donde escontro la palabra o null segun si lo encuentra
        ios: () => ua.match(/iphone|ipod|ipad/i),
        // se usa match(/android/i) porque ua devuelve una cadena de
        //letras y debo comprobar con una expresion regular si dentro
        // de esse texto esta la palabra android o iphone|ipod|ipad
        any: function (){
            return this.android() || this.ios()
            // resume las dos funciones anonimas anteriores
        }
    }
    // console.log(isSmartPhone.android())
    // console.log(isSmartPhone.ios())
    // console.log(isSmartPhone.any())

    const isDesktop = {
        window: () =>  ua.match(/windows nt/i),
        mac: () =>  ua.match(/Macintosh/i),
        // se me complico validar a Linux de pc ; 
        // inux tambien es en android y cuando se carge la pagina en un android tambien se validaria y no me gusta eso
        any: function (){
            return this.window() || this.mac()
        }
    }
    // console.log(isDesktop.window())
    // console.log(isDesktop.mac())
    // console.log(isDesktop.any())
    
    const isNavegador = {
        Chrome: () => ua.match(/chrome/i),
        firefox: () => ua.match(/firefox/i),
        safari: () => ua.match(/safari/i),
        opera: () => ua.match(/opera|opera mini/i),
        ie: () => ua.match(/msie|iemobile/i),
        edge: () => ua.match(/edge/i),
        any: function (){
            return this.Chrome() ||
            this.firefox() ||
            this.safari() ||
            this.opera() ||
            this.ie() ||
            this.edge()
        }
    }

    const contenidoExclusivo = () =>{
        if(isSmartPhone.any()){
            // devuelve el array del match(true) o null(false)
            return "contenido exclusivo de smartphone"
        } else if(isDesktop.any()){
            return "contenido exclusivo para desktop"
        }
    }
    $div.innerHTML +=`
    <ul>
        <li><b>User Agent : </b>  ${ua}</li>
        <li><b>Dispositivo : </b> ${isSmartPhone.any()? isSmartPhone.any() : isDesktop.any()}</li>
        <li><b>Navegador : </b> ${isNavegador.any()}</li>
        <li>${contenidoExclusivo()}</li>
        <li></li>
    </ul>`
    // se me hace raro que al imprimir el 
    //consola aparezca un array con EL DISPOSITIVO - EL INDEX Y EL TEXTO  y al imprimirlo en el DOM solo aparece la palabra buscada

    const explicacionUserAgent = {
        //Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) 
        //AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.96 Mobile Safari/537.36 
        //(compatible; Googlebot/2.1; +http://www.google.com/bot.html)

        //Podemos desglosar este agente de usuario de la siguiente manera:

        //Mozilla– es el producto.
        //5.0– es la versión del producto.
        //(Linux;– es el sistema operativo del dispositivo.
        //Android 6.0.1;– es la versión del sistema operativo.
        //Nexus 5X Build/MMB29P)– es el nombre de la compilación del sistema operativo.
        //AppleWebKit/537.36– es el motor de renderizado del navegador.
        //(KHTML, like Gecko)– el motor de renderizado basado en KHTML, que se comporta como Gecko.
        //Chrome/41.0.2272.96– es el navegador y su número de versión.
        //Mobile Safari/537.36– el navegador se comporta como Safari con el número de versión 537.36.
        //(compatible;– aquí comienza el comentario real, con la explicación de que el dispositivo de 
        // consulta es compatible con el navegador Mozilla.
        //Googlebot/2.1;– nombre y número de versión del rastreador.
        //+http://www.google.com/bot.html)– ¿dónde puedo obtener más información sobre este agente?
    }
}