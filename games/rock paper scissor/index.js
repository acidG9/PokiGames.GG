var a = 0;
var b = Math.floor(Math.random()*3);

document.querySelector(".scissor").addEventListener("click", function () {
    a = 1;
    document.getElementById("p").style.display = "none"; 
    document.getElementById("r").style.display = "none"; 
    document.getElementById("sh").innerHTML = "You";
    document.getElementById("blade").style.display = "inline";
    if(b==0){
        document.getElementById("cpus").style.display = "inline";
        document.getElementById("result").innerHTML = "It's a draw match 😒😒";
    }
    else if(b==1){
        document.getElementById("cpup").style.display = "inline";
        document.getElementById("result").innerHTML = "You win the match 😡🤬";
    }
    else{
        document.getElementById("cpur").style.display = "inline";
        document.getElementById("result").innerHTML = "You lost the match 😁😁";
    }
});

document.querySelector(".paper").addEventListener("click", function () {
    a = 2;
    document.getElementById("s").style.display = "none"; 
    document.getElementById("r").style.display = "none";
    document.getElementById("ph").innerHTML = "You";
    document.getElementById("blade").style.display = "inline";
    if(b==0){
        document.getElementById("cpus").style.display = "inline";
        document.getElementById("result").innerHTML = "You lost the match 😁😁";
    }
    else if(b==1){
        document.getElementById("cpup").style.display = "inline";
        document.getElementById("result").innerHTML = "It's a draw match 😒😒";
    }
    else{
        document.getElementById("cpur").style.display = "inline";
        document.getElementById("result").innerHTML = "You win the match 😡🤬";
    }
});

document.querySelector(".rock").addEventListener("click", function () {
    a = 3;
    document.getElementById("s").style.display = "none"; 
    document.getElementById("p").style.display = "none";
    document.getElementById("rh").innerHTML = "You";
    document.getElementById("blade").style.display = "inline";
    if(b==0){
        document.getElementById("cpus").style.display = "inline";
        document.getElementById("result").innerHTML = "You win the match 😡🤬";
    }
    else if(b==1){
        document.getElementById("cpup").style.display = "inline";
        document.getElementById("result").innerHTML = "You lost the match 😁😁";
    }
    else{
        document.getElementById("cpur").style.display = "inline";
        document.getElementById("result").innerHTML = "It's a draw match 😒😒";
    }
});

document.querySelector("#playagain").addEventListener("click", function () {
    location.reload();
});
