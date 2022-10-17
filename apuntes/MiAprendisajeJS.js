11//1.-  introduccion--------------------------------------------------------------------------------------------------------------------------

//2.-ascript.org  //pagina wed del jonh mircha donde esta un curso de JS----------------------------------------------------------------------

//3.-caracteristicas y gramatica--------------------------------------------------------------------------------------------------------------

//3.-variables VAR vs LET---------------------------------------------------------------------------------------------------------------------

//4.-Const------------------------------------------------------------------------------------------------------------------------------------

//5.-string-------------------------------------------------------------------------------------------------------------------------------

//6.-template string :------------------------------------------------------------------------------------------------------------------------

//7.- numeros-------------------------------------------------------------------------------------------------------------------------------

//8.-booleas-------------------------------------------------------------------------------------------------------------------------------

//9.-Null , Undefined , NaN----------------------------------------------------------------------------------------------------------------

//10.-Funciones---------------------------------------------------------------------------------------------------------------------------
// FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS




//                                       _____________   [ FUNCIONES DECLARADAS ] ________________

// calcularVelocidad(500,60)
// calcularVelocidad()
// function calcularVelocidad (distancia=undefined, tiempo=undefined){
//   let velocidad=distancia/tiempo
//   console.info(`recorrimos ${distancia} km , en un tiempo de ${tiempo} horas , por que nuestra velocidad fu de ${velocidad.toFixed(1)} km/h`)
// }
// calcularVelocidad(500,60)
// calcularVelocidad()

// (importante) las funciones declaradas se pueden inicializar y mandar los datos antes de la misma clase , esto pasa porque javascript
// primero lee VARIABLES Y FUNCIONES DECLARADAS y despues lo demas 






//                                         _____________   [ FUNCIONES DECLARADAS ] ________________

// LOPAR SE GUARDAN EN VARIABLES 

//calcularVelocidad(500,60)         <= ESTO MARCA UN ERROR            ESTA MALLLLL DEBE SER DEPUES 
//calcularVelocidad()             <= ESTO MARCA UN ERROR            ESTA MALLLLL DEBE SER DEPUES 

// let calcularVelocidad = function (distancia=undefined, tiempo=undefined){
//   let velocidad=distancia/tiempo
//   console.info(`recorrimos ${distancia} km , en un tiempo de ${tiempo} horas , por que nuestra velocidad fu de ${velocidad.toFixed(1)} km/h`)
// }

// calcularVelocidad(500,60)                <= ESTO ESTA BIEN
// calcularVelocidad()                   <= ESTO ESTA BIEN




//11.-ARREGLOS-------------------------------------------------------------------------------------------------------------------------------

//12.-OBJETOS -------------------------------------------------------------------------------------------------------------------------------

//13.-TIPOS DE OPERADORES------------------------------------------------------------------------------------------------------------------


// residuo	%
// exponenciación	**
//incrementp ++
//decremento --


// Asignación de desplazamiento a la izquierda	<<
// Asignación de desplazamiento a la derecha	>>
// Asignación de desplazamiento a la derecha sin signo	>>> 
// Asignación AND bit a bit	  &
// Asignación XOR bit a bit	  ^
// Asignación OR bit a bit	 |


// Not logico        !    
// AND lógico       &&
// OR lógico	      ||
// anulación lógica	 ?


//14.- condicionales --------------------------------------------------------------------------------------------------------------------------
//: = ,>, <, <=, >= , && , || , !

//15.-ciclos---------------------------------------------------------------------------------------------------------------------------------

//16.- try catch-------------------------------------------------------------------------------------------------------------------------------
//podria servir para los creadores de api para mandar mensajes de error 
// try{
//   console.info(`en el try se agrega el codigo a evaluar`)
// }catch{
//   console.info(`muestra los errores del codigo`)
// }finally{
//   console.info(`se ejecutara siempre al final de un try catch`)
// }

//17.-break continue----------------------------------------------------------------------------------------------------------------------------

//18.-destructuracion--------------------------------------------------------------------------------------------------------------------------

//19.-objetos literales------------------------------------------------------------------------------------------------------------------------

//20.-parametro rest & operador spread --------------------------------------------------------------------------------------------------------
//el parametro REST se agrega para un posibles datos que se ingresen ,se suelen usar en librerias reactivas
//PARAMETROS REST

    // function sumar(a,b,...c){
    // let resultado=a+b

    // c.forEach(function(n){
    //   resultado += n
    // })
    // return resultado  
    // }
    // console.info(sumar(1,2))
    // console.info(sumar(1,2,3))
    // console.info(sumar(1,2,3,4))
    // console.info(sumar(1,2,3,4,5))


//OPERADOR SPREAD

    // let arr1 =[1,2,3,4,5]
    // let arr2 =[6,7,8,9,0]
    // console.info(arr1)
    // console.info(arr2)
    // console.info(...arr1,...arr2) //junta los dos array



//21.-Arrow fuction---------------------------------------------------------------------------------------------------------------------------

//22.-prototipo-------------------------------------------------------------------------------------------------------------------------------

//23.-herencia prototipica--------------------------------------------------------------------------------------------------------------------
    // js no tenia programacion orientada a objeto y antes se usaba los prototipos en forma de clases (era mas complejo)
    // recordar que actualmente js tiene programacion orientada a objetos pero tras cortinas se usas es lo mismo que usar prototipos

//24.-Clases y herencia--------------------------------------------------------------------------------------------------------------------

//25.-metodos estaticos , Getters , Setters------------------------------------------------------------------------------------------------

  //27.-objeto date----------------------------------------------------------------------------------------------------------------------------

//28.-objeto Math-----------------------------------------------------------------------------------------------------------------------------

//29.-operador de corto circuito--------------------------------------------------------------------------------------------------------------
//CORTOCIRCUITO OR - cuando el valor de la izquierda en la 
//exprecion siempre  pueda validar a true , es el valor 
//que cargara por defecto

// function jean(nombre){
//   nombre = nombre || "desconocido"
//   console.info(`hi my name is ${nombre}`)
// }
// jean("jean") //tiende true
// jean(12345)  //tiende true
// jean(true)
// jean(0)  //tiende a false
// jean(false)


// console.info("-------------------------------")
// //CORTOCIRCUITO CON AND - Cuando el valor de la izquierda 
// //en la exprecion siempre pueda validar a false, es el valor 
// //que se cargara por defecto     

// // este el lo contrario de OR si el primer valor (de la izquierda)
// //es falso se ejecuta ese

// function pierre(nombre){
//   nombre = nombre && "desconocido"
//   console.info(`hi my name is ${nombre}`)
// }

// pierre("jean") //tiende true
// pierre(12345)  //tiende true
// pierre(true)
// pierre(0)  //tiende a false
// pierre(false)

//30.- Alert , confirm y prompt-----------------------------------------------------------------------------------------------------------------

//31.-Expreciones regulares------------------------------------------------------------------------------------------------------------------

//32.-funciones anonimas autoejecutables--------------------------------------------------------------------------------------------------

//encapsula el codigo , un ejemplo se puedes poner dos variables de ingual nombre y no causa conflicto ya que una esta encapsulada 
//y estan en contextos diferentes
// se usaban antes
// (function (d,w,c) {
//   a="jean"
//   console.info(`hola mi nombre es ${a}`)
// })(document,window,console);

// (function (d,w,c) { 
//   a="veliz"
//   console.info(`hola mi nombre es ${a}`)
// })( document,window,console);// se pasa los datos a las variables de arriba





//33.-modulos(import/export)-------------------------------------------------------------------------------------------------------------

// 44. Temporizadores (setTimeout & setInterval)-------------------------------------------------------------------------------

// 45. Asincronia y Event Loop------------------------------------------------------------------------------------------------

// 46. Callbacks--------------------------------------------------------------------------------------------------------------
    //anializar bien

    // PARA LLAMADAS ASINCRONAS NO SE SUELEN UTILIZAR YA LOS CALLBACKS , SE SUELEN UTILIZAR EN LIBRERIAS ESPECIFICAS
    // O TANVEZ EN NODEJS PERO NI TANTO.

        // cuando se nesesitan crear varias calbacks que unas dependan de otras
        // se crea algo llamado callbacks hell esto no es bueno

        // si se quieren validar errores se deben validar las callback una a una no es lo optimo
        const pruebaCallback = (num1,num2,callback) =>{

        return setTimeout(() =>{
            callback( num1, num2 )
        })
        }

        pruebaCallback(2 , 2, (a,b) =>{
            // console.log(`el resultado de la callback es ${a+b}`)
        })


        // 47. Promesas---------------------------------------------------------------------------------------------------------------
            
        // OPERACIONES DE CPU son las que la mayor parte del tiempo consumen potencia del CPU
        
        // OPERACIONES DE I/O son las que pasan la mayor parte de su tiempo pidiendo y esperando datos o recurso

            // 1.- codigo bloquenate: una llamada u operacion bloqueante no devuelve el control a la operacion hasta que esta se
            // resuelva. Por lo tanto el thread queda temporalmente bloqueado
            // 2.- codigo sincrono: sincrono se suele usar como sinonimo de codigo bloqueante ya que es los mismo

            // 3.- codigo no bloqueante: una llamada u operacion no bloqueante devuelve el control al thread inmediatamente
            // no le importa si los datos ya estan listos o no, devuelve los datos o un error
            // para hacer esto se deben hacer varia llamadas para ir verificando si los datos ya estan o no

            // 4.- codigo asincrono: IMPORTANT! una llamada u operacion asincrona devuelve automaticamente el control al thread
            // por lo que no es bloqueante pero este mandara una señal cuando los datos ya esten listos para consumir
            // este mecanismo de devolver el hilo al thread inmediantamente, pedir los datos y que estos notifiquen cuando esten listos
            // se logra con mecanismos como un callback, una promesa o un evento

            // ENTONCES LAS OPERACIONES DE I/O SE DIVIDEN EN 3:

            // 1.- Síncronas y Bloqueantes. Toda la operación se hace de una vez, bloqueando el flujo de ejecución:
            //      El thread es bloqueado mientras espera.
            //      La respuesta se procesa inmediatamente después de terminar la operación.

            // 2.- Síncronas y No-Bloqueantes. Similar a la anterior pero usando alguna técnica de polling para evitar el bloqueo en la primera fase:
            //      La llamada devuelve inmediatamente, el thread no se bloquea. Se necesitarán sucesivos intentos hasta completar la operación.
            //      La respuesta se procesa inmediatamente después de terminar la operación.

            // 3.- Asíncronas y No-Bloqueantes:
            //      La petición devuelve inmediatamente para evitar el bloqueo.
            //      Se envía una notificación una vez que la operación se ha completado. Es entonces cuando la función que procesará la respuesta (callback) se encola para ser ejecutada en algún momento en nuestra aplicación.

            // let x = 10
            // const promesa = new Promise((resolve , reject) =>{
            //     // retorna resolve si el proceso de completa correctamente y encia los datos por esta palabra
            //     // retorna reject cuando hubo un error
            //     setTimeout(() =>{
            //         x = x + 3 * 5
            //         console.log("2.- --------dentro del timeOut")
            //         resolve(x)
            //         // el resolve se colocan los datos que voy a retornar
                    
            //     },3000)
            // })


            // console.log("1.- -----------proceso iniciado")

            // promesa
            // .then(res =>{
            //     console.log(`3.- ----el resultado que devuelve promise es ${res}`)
            // })




        // 48. Async - Await----------------------------------------------------------------------------------------------------------

        // ¿Hay diferencias entre .then() y async/await?
        // En términos de sintaxis, el método .then() posse una sintaxis con más sentido cuando se usa JavaScript de manera funcional,
        // mientras que el flujo de declaraciones con async/await tiene sentido cuando se usa en métodos de clase.
        // async/await surgió como una opción de "lectura más fácil" que .then(), pero es importante tener en cuenta que estos métodos 
        // no son lógicamente equivalentes: mientras que async/await realiza el procesamiento secuencialmente, las promesas con .then() 
        // se procesan en paralelo , lo que hace que este método sea más rápido. async/await simplifica la 

        // escritura y la interpretación del código, pero no es tan flexible y solo funciona con una Promesa a la vez.
        // Pero, ¿y si necesitamos manejar varias Promesas, pero no queremos hacerlo en paralelo? Un ejemplo clásico 
        // de esta situación es acceder a una base de datos con miles de registros. En este caso, no queremos que todas 
        // las solicitudes se realicen en paralelo, ya que el exceso de solicitudes simultáneas puede causar problemas 
        // de rendimiento e incluso la caída del servicio
        

        
        // 49. Symbols----------------------------------------------------------------------------------------------------------------
            
            // los siymbols son un tipo de dato relativamente nuevo fue implementado en ecmascript6 (2015)
            // se ocupan para crear identificadosres unicos
            // son tipos de datos primitivos asi como un string,bolean,number
            // se suelen usar para identificar datos que se puedan sobre escribir por error
            let a = 1
            let b = 1
        //console.log(a===b) // true

            // curioso no ocupan un constructor new
            let a1 = Symbol()
            let b1 = Symbol()
        //console.log(a1 === b1) // false

            let a2 = Symbol("#1")
            let b2 = Symbol("#2")
            // y obvio puedo escoger el indentificador unico de mis symbols
        //console.log(a1 === b1) // false


            const NOMBRE = Symbol()

        const persona = {
                [NOMBRE]: "jean"
                // para hacer decir que es un dato de tipo symbol
                // se debe colocar entre corchetes
            }
        //console.log(persona)
            // el nombre de la propiedad que es "NOMBRE" se oculta 
            // solo muesta un "symbol():"" en consola
        //console.log(persona.NOMBRE)
            // persona.NOMBRE mandara undefined 
        //console.log(persona[NOMBRE])


            persona.NOMBRE = "jean pierre veliz"
            // hasta se puede crear una propiedad con el mismo nombre
            // del symbol y no habra problemas
        //console.log(persona.NOMBRE)

            // al final tengo un objeto con
            // 1.- un symbol() con identificador "NOMBRE" pero que no se muestra el nombre de la propiedad en consola
            // 2.- una propiedad normal tambien con "NOMBRE"

        // 50. Sets-------------------------------------------------------------------------------------------------------------------
            //ver clase

        // 51. Maps-------------------------------------------------------------------------------------------------------------------
            //SON OBJETOSson un conjunto de datos qeu tienen una relacion funcionan algo parecido 
            //a los getter y setter de las clases, coleccion de datos un diccionario
                // let mapa= new Map();
                // mapa.set("nombre","Jean Pierre")
                // mapa.set("apellido","Veliz Lavayen")
                // mapa.set("cedula","1250743208")
                // mapa.set("edad","18")
                // console.log(mapa)
                // console.log(mapa.size)
                //has devuelve un true o false , si existe o no esa elemento
                // console.log(mapa.has("nombre"))
                // console.log(mapa.get("nombre"))
                // mapa.set("nombre","pierre jean")
                // console.log(mapa.get("nombre"))
                // mapa.delete("nombre")
                // console.log(mapa.has("nombre"))
                // console.log(mapa.keys)
            
        // 52. WeakSets & WeakMaps-------------------------------------------------------------------------------------------------------
            //ver clase
            // nuevos tipos de datos EM6, como hermanos de set y map 
            // creo que son funcinales para programacion reactiva
        // 53. Iterables & Iterators-----------------------------------------------------------------------------------------------------
            //ver clase
        // 54. Generators----------------------------------------------------------------------------------------------------------------
            //ver clase
        // 55. Proxies-------------------------------------------------------------------------------------------------------------------
            // ver clase
        // 56. Propiedades Dinamicas de los Objetos--------------------------------------------------------------------------------------
            // ver clase
        // 57. This----------------------------------------------------------------------------------------------------------------------
                
        // esta palabra hacer referencia al objeto en el que estamnos 
        // trabajando de esta forma se puede invocar propiedades y metodos que tenga ese objeto
        console.log(this) // ahora estoy en el contexto global == windows
        console.log(window)
        console.log(this === window) // true

        // 58. Call, apply, bind---------------------------------------------------------------------------------------------------------
            //ver clase
        // 59. JSON----------------------------------------------------------------------------------------------------------------------
            //ver clase
        // 60. WEB APIs------------------------------------------------------------------------------------------------------------------
            //ver clase



























































        // 61. DOM: Introduccion --------------------------------------------------------------------------------------------------------
        // JavaScript tiene una API que sirve para interpretar documentos htl y poder modificarlos

        //  console.info(`++++++++++++++++++++Elementos del document++++++++++++++++++++`)
        //  console.info(window.document)
        //  console.info(document)
        //  console.info(document.head)
        //  console.info(document.body)
        //  console.info(document.documentElement)//para referirse al CUERPO HTML 
        //  console.info(document.characterSet)//juego de caracteres UTF-8
        //  console.info(document.title)
        //  console.info(document.links)//todos los links de la pagina
        //  console.info(document.images)//todas las imagenes de la pagina
        //  console.info(document.forms)//todos los formularios de una pagina
        //  console.info(document.styleSheets)//paginas de estilo enlazadas
        //  console.info(document.scripts)
            // setTimeout(()=>{
            //     console.info(document.getSelection().toString())
            //     //  LA FUNCION getSelection MUESTRA EN CONSOLA LOS QUE SE SOMBREE CON EL MOUSE
            // }, 3000)

        // 62. DOM: nodos, elementos y selectores---------------------------------------------------------------------------------------

        //63. DOM: Atributos y Data-Attributes------------------------------------------------------------------------------------------
            //es la forma de obtener atributos que estan dentro de las etiqutas o nodos
            //como un href, un nombre de clase, un nombre de id, y todos los atributos que se le pueden aplicar a una etiqueta de html
            //documenElement hace referencia a la etiqueta html

            //esta es otra forma solamente escribiendo . y el nombre del atributo
                // console.log(document.querySelector("img").src)
                // console.log(document.documentElement.getAttribute("lang"))
                //tambien hay setAtribute
                // document.documentElement.setAttribute("lang","us")
            //se modifica el documento html al ejecutar
                // console.log(document.documentElement.lang)
                // console.log($linkexterno.href)
                // $linkexterno.setAttribute("href","https://www.youtube.com/watch?v=l6npGZa_vgc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=64")
                // console.log(document.querySelector("#link-externo").getAttribute("href"))
            //eliminar un atributo
                // console.log($linkexterno.hasAttribute("rel"))
                    // hasAttribute devuelve un true o false segun el atributo existe o no
                // $linkexterno.removeAttribute("rel")
            //hasAtribute devuelve si ese atributo esiste o no
                // console.log($linkexterno.hasAttribute("rel"))

        // 64.- DOM: estilos y variables CSS---------------------------------------------------------------------------------------------------

        //ver todos las propiedades del nodo que le pasemos, a las propiedade que se no se les ha 
        //modificado se muestran con el valor por defecto que le marca el navegador
        // console.log(window.getComputedStyle($nodoP))

        // 65.- DOM: Clases CSS------------------------------------------------------------------------------------------------------------------------------
            //agregar o eliminar calses dinamicamente desde javascript

            // const $button = document.querySelector(".button")
            // console.log($button.className)
            // console.log($button.classList)
            //contains muestra si esa clase forma parte de la etiqueta
            // console.log($button.classList.contains("button2"))
            // console.log($button.classList.contains("button2"))
            // replace saca la clase y agrega otra
            // $button.classList.replace("button","button2")

        // 66.- DOM: texto y HTML-------------------------------------------------------------------------------------------------------------------------  


        //     const $textoHtml = document.getElementById("htmlYJavacript")
    
        //     const texto = `
        // <p>
        //     El modelo Objeto del documento ( <b> <i> DOM - Document Object Model </i> </b>) 
        //     es una API para que javascript entienda codigo html
        // </p>
        // <p>
        //     Este provee una representacion estructural del documento, permitiendo
        //     modificar su contenido y presentacion visual mediante codigo html
        // </p>
        // <p>
        //     <mark>El DOM no es parte de la especificacion de javaScript, es una API
        //     para los navegadores</mark>
        // </p>
        //     `
        //     $textoHtml.style.border = "solid black 1px"
        //     $textoHtml.style.padding = "10px 10px 10px 20px"

        //     // imprimir texto html desde javascript con   .innerText
        //     // usar este metdoto no es buena practica , .innerText imprime todas la etiqutas html 
        //     $textoHtml.innerText = texto

        //     // textContent tambien no sirve bien, no imprime la estrcutura del html crea un solo parrafo
        //     $textoHtml.textContent = texto

        //     // innerHTML este si interpreta codigo html y lo imprime como debe ser
        //     $textoHtml.innerHTML = texto

        // 67 .- DOM Traversing: Recorriendo el DOM--------------------------------------------------------------------------

            // formas de selccionar elementos en javascript

            // const $ulImagenes = document.getElementById("idImagenes")

            // console.log($ulImagenes)
            // console.log($ulImagenes.children)
            // console.log($ulImagenes.children[2])
            // console.log($ulImagenes.children[4])
            // console.log($ulImagenes.parentElement)
            // console.log($ulImagenes.firstChild)
            // console.log($ulImagenes.firstElementChild)
            // console.log($ulImagenes.lastElementChild)
            // console.log($ulImagenes.previousElementSibling)
            // console.log($ulImagenes.nextElementSibling)

            // // encuentra al elemento mas cercano ???
            // console.log($ulImagenes.closest("div"))

        // 68 .- DOM: creando elementos y fragmentos-------------------------------------------------------------------

            // //ESTA ES LA FORMA MAS BASICA DE CREAR COSAS EN EL DOM
            // const $figure = document.createElement("figure"),
            //     $img = document.createElement("img"),
            //     $figcaption = document.createElement("figcaption"),
            //     // se debe crear un nodo de tipo texto, los demas solo crean tiquetas html vacias
            //     $figcaptionText = document.createTextNode("javascript (creado desde Js)"),
            //     $section = document.getElementById("idImagenes")

            // // UNA VES CREADOS LOS ELEMENTOS SE VAN AGREGANDO COMO UNO QUIERA UNO DENTRO DE OTRO, CON HIJOS COMO SEA
            // $figure.appendChild($img)
            // $figure.appendChild($figcaption)
            // $figcaption.appendChild($figcaptionText)
            // $section.appendChild($figure)

            // $img.setAttribute("src","https://i.blogs.es/664d0f/descarga/450_1000.png")
            // $img.setAttribute("alt","javascript (creado desde Js)")


            // // // UTILIZACION DE FRAGMENTOS ES LO MEJOR OPCION LOS FRAGMENTOS EVITAN EL REFLOW ,
            // el reflow significa REDISTRIBUCION un fragmen es un nodo que evita que los elementos que esten dentro del el
            // no formen parte del arbol del html por lo que cada vez que se recarge la pagina o se haga mas pequeño la ventana del navegador
            // estos elementos cargen mas rapidos , simplemento no puedo hacer el proceso de cargar elementos el arbol de html tantas veces
            // Los innerHTML tambien crear reflow son mas lentos

            
            //LA APP SERA MAS RAPIDA (LOS FRAGMENTOS SON UN TIPO DE NODO HTML) 
            // const notasMusicales = ["Do","Re","Mi","Fa","Sol","La","Si"],
            // $ul = document.createElement("ul"),
            // $fragment = document.createDocumentFragment()

            // // LO MAS OPTIMO ES CREAR LOS NODOS SEGUN EL NUERO DE ELEMENTOS DEL ARRAY 
            // (NO SERIA LO OPTIMO AGREGAR LOS NODOS DINAMICAMENTE CON InnerHTML)
            // notasMusicales.forEach(el =>{
            //     const $li = document.createElement("li")
            //     $li.textContent = el
            //     $fragment.appendChild($li)
            // })

            // document.write("Notas musicales")

            // $ul.appendChild($fragment)
            // document.body.appendChild($ul)
            

        // 69.- DOM: Templates HTML------------------------------------------------------------------------------------------

        // SE PUEDEN CREAR ELEMENTOS EN EL DON 
        // 1.-CREANDO ELEMENTOS Y ADICIONANDOLOS MANUALMENTE UNDO DENTRO DE OTRO y con la ayuda de fragmen crear
        // CREAR FRAGMENTOS PARA REPETIRLOSM DINAMICAMENTE CON UN forEach PERO ESTO REQUIERE MUCHO CODIGO ya que devo agregar
        // los nodos uno a uno dentro de otro con appendChild($nodo)  
        // 2.- CREANDO LA ESTRUCTURA HTML DENTRO DE UN innerHTML SIN UN FRAGMEN PARA ESCRIBIR MENOS CODIGO PERO ESTO NO ES LO MAS RECOMENDADO
        // ya que es mas lento tendria reflow
        // 3.- LO MAS OPTIMO ES USAR TEMPLATE QUE NO RENDERIZAN CODIGO EN EL DOM , SI ESCRIBES CODIGO HTML DENTRO DE UN <TEMPLATE> NO SE VERA 
        // EN EL DOM , PERO ESTO NOS SIRVE PARA HACER COPIAS DE ESTE ELEMENTO Y CON LA AYUDA DE FRAGMENTOS SE LOS PUEDE RENDERIZAR 
        // EN PANTALLA DE ESTA FORMA CON LOS TEMPLATES SE OBTIENE UNA FORMA MAS FACIL Y GRAFICA DE ESTRUCTURAR EL CODIGO HTML 
        //QUE QUIERO RENDERIZAR Y CON LOS FRAGMENG LOS PUEDO MOSTRAR EN PANTALLA SIN QUE ESTO CREEN REFLOW(redistribucion) los frag,en no pegan
        // el codigo html directamente en el arbol del doc html y esto hace que se consuman menos fuerza de procesamiento.


        
        const notasMusicales = [
                {
                    src :"https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
                    title : "react"
                },
                {
                    src :"https://ih1.redbubble.net/image.453958487.1770/pp,840x830-pad,1000x1000,f8f8f8.u3.jpg",
                    title : "Angular"
                },
                {
                    src : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/640px-PHP-logo.svg.png",
                    title : "PHP"
                },
                {
                    src : "https://www.iped.com.br/img/cursos/56207.jpg",
                    title : "MySql"
                }
            ]


            let $ul = document.getElementById("ul-NotasMusicales")
        //     // el .content significa que estoy accediendo al contenido que esta dentro del template no a la etiqueta en si
            let $template = document.querySelector("#template").content
            let $fragment = document.createDocumentFragment()
            // console.info($template)
            notasMusicales.forEach(iten =>{

                // 1.-MODIFICO MIS TEMPLATES CON LOS DATOS A MOSTRAR
                // 2.-CREO UN CLON DE MI TEMPLATE
                // 3.-COLOCO MI CLON COMO HIJO DEL FRAGMENTO
                // ESTE PROCESO SE VA A REALISAR POR CADA ITERACION QUE HAGA EL forEach 
                // y esto depende de la cantidad de datos que tenga que mostar

                // los textos estaticos se crean en el tamplate ya no es nesesario crear un nodo de texto y agregar el codigo dentro de el
                // los datos que cambian eso se generan aqui
                // modifico mi template con los datos que quiero mostra
                $template.querySelector("#span").textContent = iten.title
                $template.querySelector("#img").setAttribute("src",iten.src)
                $template.querySelector("#img").setAttribute("alt",iten.title)
                $template.querySelector("#img").style.width = "20%"
        //      // el TRUE es para que clone todo lo que este dentro del template
        //      // con FALSE soloe se clona la etiqueta
                const clone = $template.cloneNode(true)
        //      // let clone = document.importNode($template,true)
        //      // seria otra forma de clonar el template segun jom mircha
                $fragment.appendChild(clone)
        //      // luego el clon que creamos lo ponermos dentro del fragmento
                $ul.appendChild($fragment)
        })
        //      // dentro del ul se crearan todos los li creados en el forEach
        



        //  70.- Modificando Elementos (old Style)----------------------------------------------------------------------------

            // 71. DOM: Modificando Elementos (Cool Style)----------------------------------------------------------------------------------

            //insertAdjacent....
                // .insertAdjacentElement(positionn,Elemento)
                // .insertAdjacentElement(position,contenido html)
                // .insertAdjacentElement(position, nodo de texto)

                // valores como position
                // beforebegin(hermado anterior antes de comenzar)
                // afterbegin(primer hijo)
                // beforeend(ultimo hijo)
                // afterend(hermano siguiente )
            $ul.insertAdjacentElement("beforeend",$newCard)

            // 72. DOM: Manejadores de Eventos--------------------------------------------------------------------------------------------------

        // // 73. DOM: Eventos con parametros y remover eventos -------------------------------------------------------------
        
        function saludar1 (nombre="Desconocido"){
            alert(`hola ${nombre} - ${event.type} (ESTA ES UN FUNCION MANEJADORA DE EVENTO QUE RECIBE UN PARAMETRO ESTO NO SE PUEDE)`)
        }
            // le asignamos un envento mas a mi evento multiple y mira lo que pasa cuando se quiere pasar una variable 
            // a una fuccion manejadora de eventos
        $eventoSemanticoListener.addEventListener("click",saludar1)
            // pasa que no se puede asignar variables a una funcion manejadora de eventos
            // si se pasa uno este se auto asignara como el propio event


        function saludar2 (nombre="Desconocido"){
            alert(`hola ${nombre} - ${event.type} 
            (SI QUIERO PASAR PARAMETRO PARA UTILIZAR DENTRO DE MI EVENTO DEBO EJECUTAR LA 
            FUNCION DENTRO DEL LA FUNCION MANEJADORA DEL EVENTO)
            $eventoSemanticoListener.addEventListener("click", (e) => {
            saludar2("jean pierre")
            })`)
            }


        const $removedorDeEvento = document.getElementById("removedorDeEvento")

        //ESTO ES APARTE DE ESTO DE EL TEMA ACTUAL
        //$divfather.addEventListener("click", (ejecutaUnaVez) , { once: true})
        // los addEventListener aceptan un tercer parametro se pueden hacer varias cosas en este caso 
        // once:true hace que el evento se ejecutara un avez no mas
        // va dentro de un objeto ya que se pueden agregar mas cosas como un 
        //captute:false  esto revierte el efecto de burbuja los evento se activara del evento padre hasta el hijo



        // 74. DOM: Flujo de eventos (Burbuja y captura)-------------------------------------------------------------------


        // SEGUN PARA EVITAR TODO ESTO DE BURBUJAS ES MEJOR USAR LA DELEGACION DE EVENTOS ES MAS OPTIMOs
        const $divfather = document.querySelector(".father")
        const $divSon = document.querySelector(".son")

        const $divfather2 = document.querySelector(".father2")
        const $divSon2 = document.querySelector(".son2")

        // FASES DE UN EVENTO EN JAVASCRIPT
        // 1. CAPTURA: se busca desde la etiqueta html y busca el nodo que genero el evento 
        // 2. TARGET: activa el evento 
        // 3. BLUBBLING : esto es lo especial EL EVENTO CREA UN EFECTO DE BURBUJA Y ACTIVA LOS EVENTOS DE LOS ELEMENTOS PADRES

        $divfather.addEventListener("click", (e) =>{
            console.info(`this event is generated by father node `)
        })
        $divSon.addEventListener("click", (e) =>{
            console.info(`this event is generated by son node `)
        })
        // EN ESTE CODIGO SE PUEDE VER COMO SI YO ACTIVO EL EVENTO DE EL HIJO TAMBIEN SE ACTIVA EL PADRE 

        $divfather2.addEventListener("click", (e) =>{
            console.info(`this event is generated by father node `)
            e.stopPropagation()
        })
        $divSon2.addEventListener("click", (e) =>{
            console.info(`this event is generated by son node `)
            e.stopPropagation()
        })
        // EN ESTE CODIGO SE PUEDE VER QUE SE CANCELA ESTE EFECTO DE BURBUJA


        // 75 .- DOM:stopPropagation & preventDefault-----------------------------------------------------------------


        // ESTO ME SIRVE PARA DETENER EL COMPORTAMIENTO POR DEFECTO QUE TIENES CIERTAS COSAS
        // POR EJEMPLO CUANDO SE HACE UN SUBMMIT DE UN FORMULARO ESTE SE PROCESA AUTOMATICAMENTE Y ESO NO ES
        // LO OPTIOMO SI HACEMOS PETICIONES A UNA API YA QUE ESTAS PETICIONES DURAN MAS TIEMPO Y CON UN 
        // preventDefault cancelo esto y puedo procesar el formulario cunado yo quiera osea cuando ya llegen los datos





        // 76 .-DOM: Delegacion de eventos----------------------------------------------------------------------------
                

            // 77 .-BOM: Propiedades y Eventos----------------------------------------------------------------------------
                // revise los eventos mas importantes del windows 
                // rezize: este se ejecuta cuando se cambia el tamaño de la pantalla del DOM
                // scroll: este se ejecuta cuando se hace un scroll con este se puede extrar el tamaño del scroll en la pantalla por 
                // load: se ejecuta al cargar el documento 
                //(este se ejecuta una vez que carge toda la estructura html suele durar unos milisegundos ) 
                // con DOMcontentLoaded se soluciona esto carga mas rapido no espera a que carge el html

                // window.innerHeight devuelve el tamaño de la pantalla del dispositivo NO DEL DOM
                // window.outerHeight devuelve el tamaño de la pantala de DOM o navegador
                // window.screenX devuelve la posicion del scroll
                
            // 78 .-BOM: Metodos------------------------------------------------------------------------------------------

            const   $contenedor = document.querySelector(".contenedorButtonsVentana")


            let estadoDeVentana

            // aplique la delegacion de eventos 
            // en este caso aplique los eventos al elemento padre de los botones pero tambien se puede 
            // ir mas arriba aplicandolos al document
            $contenedor.addEventListener("click", (e)=>{
                console.info(e)
                if(e.target.matches(".btn-open")){
                    estadoDeVentana = window.open("https://www.youtube.com")
                }
                if(e.target.matches(".btn-close")){
                    estadoDeVentana.close();
                }
                if(e.target.matches(".btn-print")){
                    window.print()
                }
            })

            // 79 .-BOM: Objetos: URL, Historial y Navegador--------------------------------------------------------------


                // location hace referencia a la locacion del servidor
                // console.log("-----------Objeto ULR (location)----------")
                // console.log(location)
                // console.log(location.origin)
                // console.log(location.protocol)
                // console.log(location.host)
                // console.log(location.hostname)
                // console.log(location.port)
                // console.log(location.href)
                // console.log(location.hash)// NA
                // console.log(location.pathname)
                // console.log(location.search) // NA


                // console.log("----- objeto historial(history)-----")
                // console.log(history)
                // console.log(history.length)
                // // length hace referencia a la cantidad de pagina en la que he pasado
                // history.black(2)
                // // history funciona con la flecha de ir para a tras en el navegador
                // history.forward(1)
                // // history hace como la flecha de ir para adelante


                // // navigator hace referencia a cosas del navegador chrome, mozilla etc
                // console.log("------objeto navegador (navigator)-------")
                // console.log(navigator)
                // console.log(navigator.connection)
                // console.log(navigator.geolocation)
                // console.log(navigator.mediaDevices)
                // console.log(navigator.mimeTypes)
                // console.log(navigator.onLine)
                // console.log(navigator.serviceWorker)
                // console.log(navigator.storage)
                // console.log(navigator.usb)
                // console.log(navigator.userAgent)




            // 80.- DOM: Ejercicios practicos
                // EN CARPETA APARTE