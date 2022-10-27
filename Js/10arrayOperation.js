
export default function arrayOperation(idForm,idTextView){

    const $form = document.querySelector(idForm);
    const $contentView = document.querySelector(idTextView);

    document.addEventListener("click", (e)=>{
        if(e.target.parentNode === $form){
            console.log("a")
            setInterval(() => {
                let firstNumValue = $form.firstNum.value;
            }, 100);
        }
    })

    function sixCodeInput(){
        // evitar que se ejecute una linea de codigo
        // obtener en tiempo real los values 
        // limitar el numero de elementos que se pueden ingresar
    }

    document.addEventListener("submit", (e) =>{
        if(e.target.matches(idForm)){
            e.preventDefault();
            let firstNumValue = $form.firstNum.value;
            let secondNumValue = $form.secondNum.value;
            let thirdNumValue = $form.thirdNum.value;
            let fourthNumValue = $form.fourthNum.value;
            let fifthNumValue = $form.fifthNum.value;
            let sixthNumValue = $form.sixthNum.value;
            console.log(firstNumValue,secondNumValue,thirdNumValue,fourthNumValue,fifthNumValue,sixthNumValue);
        }
    });
    
}