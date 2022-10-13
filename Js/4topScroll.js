
export function topScroll(nodoButton,claseMuestraButton){

    const $nodoButton = document.querySelector(nodoButton)

    document.addEventListener("scroll", (e)=>{
        if(window.scrollY > 900 || document.documentElement.scrollTop > 900){
            $nodoButton.classList.add(claseMuestraButton)
        }else{
            $nodoButton.classList.remove(claseMuestraButton)
        }
        
    })

    document.addEventListener("click", (e)=>{
        if(e.target.matches(nodoButton)){
            // window.scroll(0,0)
            window.scrollTo({
                vehavior:"smooth",
                top:0,
                // letf:0
            })
        }
    })

}

