
export default function estadoDeRed(divMuestraEstado){
    const $divMuestraEstado = document.querySelector(divMuestraEstado)


    window.addEventListener("online", () =>{
        a()
    })
    window.addEventListener("offline", () =>{
        a()
    })

    const a = () =>{
        if((navigator.onLine) === false){
            $divMuestraEstado.innerHTML = `
            <svg class="section2-contenido-estadoDeRed-contenedor-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
            <g fill="none" stroke="rgb(185, 185, 185)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 3l18 18"></path><path d="M14.828 9.172A4 4 0 0 1 16 12"></path><path d="M17.657 6.343a8 8 0 0 1 1.635 8.952"></path>
            <path d="M9.168 14.828a4 4 0 0 1 0-5.656"></path><path d="M6.337 17.657a8 8 0 0 1 0-11.314"></path></g></svg>
            </svg>
            `
        }else{
            $divMuestraEstado.innerHTML = `
            <svg class="section2-contenido-estadoDeRed-contenedor-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
            <g fill="none" stroke="rgb(185, 185, 185)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 12v.01"></path><path d="M14.828 9.172a4 4 0 0 1 0 5.656"></path><path d="M17.657 6.343a8 8 0 0 1 0 11.314"></path>
            <path d="M9.168 14.828a4 4 0 0 1 0-5.656"></path><path d="M6.337 17.657a8 8 0 0 1 0-11.314"></path></g></svg>
            `
        }
    }



        // const compruebaOfline = setInterval(() => {

        //     if((navigator.onLine) === false){
        //         $divMuestraEstado.innerHTML = `
        //         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
        //         <g fill="none" stroke="rgb(185, 185, 185)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        //         <path d="M3 3l18 18"></path><path d="M14.828 9.172A4 4 0 0 1 16 12"></path><path d="M17.657 6.343a8 8 0 0 1 1.635 8.952"></path>
        //         <path d="M9.168 14.828a4 4 0 0 1 0-5.656"></path><path d="M6.337 17.657a8 8 0 0 1 0-11.314"></path></g></svg>
        //         </svg>
        //         `
        //         console.log("a")
        //         // clearInterval(compruebaOfline)

        //         const compruebaOnline = setInterval(() =>{
        //             if((navigator.onLine) === true){
        //                 $divMuestraEstado.innerHTML = `
        //                 <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
        //                 <g fill="none" stroke="rgb(185, 185, 185)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        //                 <path d="M12 12v.01"></path><path d="M14.828 9.172a4 4 0 0 1 0 5.656"></path><path d="M17.657 6.343a8 8 0 0 1 0 11.314"></path>
        //                 <path d="M9.168 14.828a4 4 0 0 1 0-5.656"></path><path d="M6.337 17.657a8 8 0 0 1 0-11.314"></path></g></svg>
        //                 `
        //                 console.info("b")
        //                 setTimeout(() => {
        //                     $divMuestraEstado.innerHTML = ``
        //                     console.info("a")
        //                 }, 2000);
        //                 // clearInterval(compruebaOnline)
        //             }
        //         }, 2000)
        //     }




        // }, 2000);
}

