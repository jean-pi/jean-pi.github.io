
export default function ventanaUlr(form){

    const $form = document.querySelector(form)
    let tester
    document.addEventListener("submit", (e) =>{
        if(e.target === $form){
            e.preventDefault()
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