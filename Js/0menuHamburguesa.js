let $body = document.querySelector("body")
export function hamburgerMenu(panelBtn,panel,classAvtive){

    document.addEventListener("click", (e) =>{
        if(e.target.matches(panelBtn)){
            document.querySelector(panel).classList.toggle(classAvtive)

            if($body.style.overflowY === "hidden"){
                $body.style.overflowY = "scroll"
            } else{
                $body.style.overflowY = "hidden"
            }
        }

    }) 
}
