const num = [...document.querySelectorAll(".btn-num")];
const display = document.querySelector("#p1");
const operation =document.querySelectorAll(".btn-operation");
const apagar = document.querySelector("#AC");
const result = document.querySelector(".btn-equal");

num.forEach((el)=>{
    el.addEventListener('click', (el)=>{
        
        display.textContent += el.target.value;
        console.log(display);
    })
});

    operation.forEach((action)=>{
        action.addEventListener("click", (op)=>{
        switch(op.target.value){
            case "+":
                display.textContent += op.target.value;
                break;
            case "-":
                display.textContent += op.target.value;
                break;
            case "/":
                display.textContent += op.target.value;
                break;
            case "*":
                display.textContent += op.target.value;
                break;
        }
    })
})


apagar.addEventListener("click", teste);
result.addEventListener("click", resultado);

function teste() {
        display.textContent = 0;
    }
function resultado(){
    let valorT=eval(display.textContent);
    display.textContent = valorT;

}