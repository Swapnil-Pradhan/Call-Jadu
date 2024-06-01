const flash = document.getElementById("flash"), beep = new Audio("assets/audio/beep.mp3"), 
    b = new Audio("assets/audio/b.mp3"), c = new Audio("assets/audio/c.mp3"), f = new Audio("assets/audio/f.mp3"), E = new Audio("assets/audio/e.mp3"),
    max = new Audio("assets/audio/max.mp3"), ultra = new Audio("assets/audio/ultra.mp3"),
    all = [b, c, f, E, max];
var clicked, counter = "";
function keypress(e) {
    console.log(e.key);
    
    if (e.key == "Enter") {
        document.getElementsByTagName("section")[0].style.display = "none";
        beep.play();
        clicked = true;
    }
    
    if(clicked){
        if (["b", "B"].includes(e.key)) {
            b.play();
            flash.innerHTML = "C";
        } else if (["c", "C"].includes(e.key)) {
            flash.innerHTML = "F";
            c.play();
        } else if (["f", "F"].includes(e.key)) {
            flash.innerHTML = "E";
            f.play();
        } else if (["e", "E"].includes(e.key)) {
            flash.innerHTML = "B";
            E.play();
        } else {
            flash.innerHTML = "B";
            if(e.key != "Enter") all[Math.floor(Math.random() * 5)].play();
        }
        counter+= e.key;

        if (counter.toLowerCase().slice(-12) == "bcfebcfebcfe"){
            ultra.play();
            document.getElementsByTagName("main")[0].classList.toggle("ultra");
            setTimeout(() => document.getElementsByTagName("main")[0].classList.toggle("ultra"), 20000);
            counter = "";
        }
        else if (counter.toLowerCase().slice(-4) == "bcfe"){ max.play() }
    }
}

// B C F E