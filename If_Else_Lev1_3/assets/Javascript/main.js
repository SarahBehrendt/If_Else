function greaterThan(){
    const output = document.querySelector(".output");
    if(Number(document.querySelector("#input").value) >= 18){
        output.innerHTML = "Ja du darfst Shisha rauchen!"
    }else{
        output.innerHTML = "Nein du darfst noch nicht Shisha rauchen!"
    }
}