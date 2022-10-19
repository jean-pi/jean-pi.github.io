
export default function operacionesConDosNumeros(idForm,idContentView){

    const $form = document.querySelector(idForm);
    const $contentView = document.querySelector(idContentView);

    console.log($form)
    function numeroMayorMenor(num1,num2){
        if(num1 < num2 ){
            let result = {
                numMayor : num2,
                numMenor : num1
            }
            return result;
        } 
        if(num1 > num2 ){
            let result = {
                numMayor : num1,
                numMenor : num2
            }
            return result;
        }
    }
    function numerosEntreNum1Num2(num1,num2){
        let numEntreNum1Num2Arr = [];
        for(let i = numeroMayorMenor(num1,num2).numMenor+1; i < numeroMayorMenor(num1,num2).numMayor; i++){
            numEntreNum1Num2Arr.push(i);
        }
        return numEntreNum1Num2Arr;
    }
    function numeroIparEntreNum1Num2(arr){ 
        let numImpares = arr.filter(number => number % 2 === 1)
        return numImpares;
    }
    function isParIsImpar(num1,num2){
        let imparParObj = {
            num1: ``,
            num2: ``
        };
        if(num1%2===1){imparParObj.num1 = `impar`}
        if(num1%2===0){imparParObj.num1 = `par`}
        if(num2%2===1){imparParObj.num2 = `impar`}
        if(num2%2===0){imparParObj.num2 = `par`}
        return imparParObj;
    }

    document.addEventListener("submit", (e) =>{
        if(e.target.matches(idForm)){
            e.preventDefault();
            let num1 = parseFloat($form.primerNumero.value);
            let num2 = parseFloat($form.segundoNumero.value);

            if($form.primerNumero.value.includes(`,`)){
                return $contentView.innerHTML = "solo se aceptan valores numericos enteros";
            }
            if(isNaN(num1) || isNaN(num2) || !Number.isInteger(num1) || !Number.isInteger(num2)){
                return $contentView.innerHTML = "solo se aceptan valores numericos enteros";
            }
            if(num1 === num2){return $contentView.innerHTML= `invalido valores iguales : ${num1} = ${num2} son iguales`}


            let numEntreNum1Num2Result = numerosEntreNum1Num2(num1,num2);
            let imparEntreNum1Num2Result = numeroIparEntreNum1Num2(numEntreNum1Num2Result);
            let numeroMayor = numeroMayorMenor(num1,num2).numMayor;
            let numeroMenor = numeroMayorMenor(num1,num2).numMenor;
            let num1IsparIsimpar = isParIsImpar(num1,num2).num1;
            let num2IsparIsimpar = isParIsImpar(num1,num2).num2;

            if(numEntreNum1Num2Result.length >= 30){
                numEntreNum1Num2Result =  numEntreNum1Num2Result.slice(0,30);
                numEntreNum1Num2Result.push("....");
            }
            if(imparEntreNum1Num2Result.length >= 30){
                imparEntreNum1Num2Result =  imparEntreNum1Num2Result.slice(0,30);
                imparEntreNum1Num2Result.push("....");
            }

            $contentView.innerHTML = ` 
            <p class="section2-contenido-twoNumbers-container-resultadosView-p">Numero mayor: ${numeroMayor}</p>
            <p class="section2-contenido-twoNumbers-container-resultadosView-p">Numero menor: ${numeroMenor}</p>
            <p class="section2-contenido-twoNumbers-container-resultadosView-p">Numeros entre ${num1} y ${num2}: [${numEntreNum1Num2Result}]</p>
            <p class="section2-contenido-twoNumbers-container-resultadosView-p">Numeros impares entre ${num1} y ${num2}: [${imparEntreNum1Num2Result}] </p>
            <p class="section2-contenido-twoNumbers-container-resultadosView-p">${num1} es: ${num1IsparIsimpar} </p>
            <p class="section2-contenido-twoNumbers-container-resultadosView-p">${num2} es: ${num2IsparIsimpar}</p>
            `;
        }
    })

} 
