
export default function ventanaUlr(form){

    const $form = document.querySelector(form)
    let tester
    document.addEventListener("submit", (e) =>{
        if(e.target === $form){
            // atrapo el evento submit de este formulario
            e.preventDefault()
            // se escribe preventDefault para evitar el comportamiento por defecto del navegador QUE
            // ES RECARGARSE CADA VEZ QUE SE ENVIA UN FORMULARIO
            
            // los formularion se envia con un 
            //NAME que es el que se le da en el html mane="numeroDeCedula"
            //Valor que es el valor que se ingresa o que regresa en input en si
            tester = window.open(
                $form.ulr.value,
                "tester" , 
                `innerWidth = ${$form.ancho.value},
                innerHeight = ${$form.largo.value}`
            )
        }
    })

    document.addEventListener("click", e =>{
        if(e.target === $form.cerrar ){
            tester.close()
        }
    })

} 