export function nightMode (nightMode_btn){
    const $btn_nightMode = document.querySelector(nightMode_btn)

    const lightMode = () =>{
        $btn_nightMode.setAttribute("src","assets/modoNoche_claro.PNG")
        document.querySelector("body").classList.add("theme")
        document.querySelector("body").classList.remove("theme-dark")
        localStorage.setItem("theme","light")
    }
    const darkMode = () =>{
        $btn_nightMode.setAttribute("src","assets/modoNoche_oscuro.PNG")
        document.querySelector("body").classList.add("theme-dark")
        document.querySelector("body").classList.remove("theme")
        localStorage.setItem("theme","dark")
    }

    document.addEventListener("click", (e)=>{
        if(e.target.matches(nightMode_btn)){
            if($btn_nightMode.getAttribute("src") === "assets/modoNoche_oscuro.PNG"){
                lightMode()
            }else{
                darkMode()
            }
        }
    })

    // local storage es un objeto donde se puede guardar informacion se peude guardar hasta 5mb de infomarcion
    document.addEventListener("DOMContentLoaded", (e) => {
        //si escuatra una variable llamada "theme" en el localStorage
        if(localStorage.getItem("theme") === null) localStorage.setItem("theme","light");
        if(localStorage.getItem("theme") === "light") lightMode();
        if(localStorage.getItem("theme") === "dark") darkMode();
    })

}
