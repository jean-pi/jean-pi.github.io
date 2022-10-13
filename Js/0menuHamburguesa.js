let $body = document.querySelector("body")
export function hamburgerMenu(panelBtn,panel,classAvtive){

    document.addEventListener("click", (e) =>{
        // target lo que hace es devolver el elemento html que desancadena el evento
        // matches busca un selector valido , Id,class,nodo y si el que desencadena el evento 
        // en este claso un click tiene selector devuelve true o false
        // el targer.matches va a validar  true cuando yo preseione sobre el 
        // selector hamburger-btn ( esa es la clase que se le paso a la variables panelBtn)
        if(e.target.matches(panelBtn)){
            document.querySelector(panel).classList.toggle(classAvtive)

            if($body.style.overflowY === "hidden"){
                $body.style.overflowY = "scroll"
            } else{
                $body.style.overflowY = "hidden"
            }

            
            // console.log(e.target)
            // console.log(e.target.matches(panelBtn))

            // explicacion de lo de aca arriba
            // cuando se deben crear bastantes eventos 
            // por ejenplo un formulario no seria optimo agregar los eventos uno por uno 
            // a cada nodo, lo mas optimo es crear un solo evento en la clase padre
            // donde estan todos estos eventos, de esta forma tengo todos los eventos disponibles
            // para desencadenarlos cuando quiera 
        }

    }) 
}
