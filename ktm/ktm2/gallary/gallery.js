tsParticles.load("tsparticles",{

particles:{

number:{
value:40
},

color:{
value:"#ff6600"
},

opacity:{
value:0.15
},

size:{
value:20,
random:true
},

move:{
enable:true,
speed:1
},

shape:{
type:"circle"
}

}

});

function openImage(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=src;
}

function closeImage(){

document.getElementById("lightbox").style.display="none";
}
window.addEventListener("load", () => {

    const sound = document.getElementById("bikeSound");

    sound.play().catch(() => {});

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").remove();
        }, 1000);

    }, 5000);

});