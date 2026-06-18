const bike = document.getElementById("bike");

document.addEventListener("mousemove",(e)=>{

let x =
(window.innerWidth/2 - e.pageX)/40;

let y =
(window.innerHeight/2 - e.pageY)/40;

bike.style.transform =
`rotateY(${x}deg)
 rotateX(${-y}deg)`;

});

tsParticles.load("tsparticles",{

particles:{

number:{
value:40
},

color:{
value:"#999999"
},

opacity:{
value:0.1
},

size:{
value:30,
random:true
},

move:{
enable:true,
speed:1,
direction:"top"
},

shape:{
type:"circle"
}

},

background:{
color:"transparent"
}

});
function gotologin(){
    location.href="D:\html\ktm\ktm2\loginpage\index.html";
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