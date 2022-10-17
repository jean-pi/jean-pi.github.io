
const n = navigator,
    ua = navigator.userAgent
export default function detencionDeDispositivos(id){
    const $div = document.querySelector(id)
    
    const isSmartPhone = {
        android: () => ua.match(/android/i),
        ios: () => ua.match(/iphone|ipod|ipad/i),
        any: function (){
            return this.android() || this.ios()
        }
    }

    const isDesktop = {
        window: () =>  ua.match(/windows nt/i),
        mac: () =>  ua.match(/Macintosh/i),
        any: function (){
            return this.window() || this.mac()
        }
    }
    
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
}