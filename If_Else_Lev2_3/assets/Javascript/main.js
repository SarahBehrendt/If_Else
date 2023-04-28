function counter(){
    let number = Number(document.querySelector("#number").value);
    let differenz = Number(number -27);

    if (number > 27){
        console.log("multipliziert " + differenz * 2);
    }else{
        console.log("");
    }
}