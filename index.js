document.getElementById("random").addEventListener("click", function(){
    var a=Math.floor(Math.random()*4);
    if(a==0){
        window.open("games/dice%20game/index.html","_self")
    }
    else if(a==1){
        window.open("games/simon%20game/index.html","_self")
    }
    else if(a==2){
        window.open("games/drum%20kit/index.html","_self")
    }
    else{
        window.open("games/rock%20paper%20scissor/index.html","_self")
    }
})