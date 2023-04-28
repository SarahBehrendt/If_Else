function adult() {
    const age = Number(document.querySelector("#age").value);
    const output =document.querySelector(".output");

    if( age >= 18){
        output.innerHTML = "Volljährig";
    } else {
        output.innerHTML = "Minderjährig";
    }


    
}