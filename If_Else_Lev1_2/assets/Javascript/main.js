function weather() {
    const wetter = Number(document.querySelector("#wetter").value);
    const output = document.querySelector(".output");

    if ( wetter == 10 || wetter == 9 || wetter == 8){
        output.innerHTML = " Das Wetter ist Super";
    }else if( wetter == 7 || wetter == 6){
        output.innerHTML = "Das Wetter ist Gut";

    }else if ( wetter ==5 || wetter ==4 || wetter ==3){
        output.innerHTML = "Das Wetter ist Okay";
    }else if (wetter == 2 || wetter == 1 || wetter == 0){
        output.innerHTML = "Das Wetter ist Schlecht";
    }else{
        output.innerHTML ="Tragen Sie eine Zahl von 1-10 ein";
    }

    
}