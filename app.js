import { hamburgerMenu } from "./Js/0menuHamburguesa.js";
import { reloj} from "./Js/1reloj.js";
import {ballMovimiento,ballDispositivo} from "./Js/2ballTeclado.js"
import { cuentaRegresiva } from "./Js/3cuentaRegresiva.js";
import { topScroll } from "./Js/4topScroll.js";
import { nightMode } from "./Js/5nightMode.js";
import ventanaUlr from "./Js/6ventanaUlr.js";
import detencionDeDispositivos from "./Js/7userAgent.js";
import estadoDeRed from "./Js/8estadoDeRed.js";
import operacionesConDosNumeros from "./Js/9twoNumberOperation.js";

document.addEventListener("DOMContentLoaded", ()=>{
    hamburgerMenu("#menuLateralActive","#panel","panel-is_active")
    reloj("#hours","#minutes","#seconds")
    ballDispositivo("#ball","#mesageCelular","ball_active","mesageCelular_active")
    cuentaRegresiva("#divMuestraContador","may 25,2023 00:00:00","Feliz cumpleaños!!!!🥳🥳")
    topScroll("#topScroll-btn","topScroll-btn_active")
    ventanaUlr("#form")
    detencionDeDispositivos("#divUserAgent")
    estadoDeRed("#onlineOflineDiv")
    operacionesConDosNumeros("#formTwoNumbersOperation","#contentViewTwoNumbersOperation")
})
nightMode("#nightMode-btn")// afuera porque ya tiene un "DOMContentLoaded"

document.addEventListener("keydown", (e) =>{
    ballMovimiento(e ,"#ball", "#ballContainer")
})
