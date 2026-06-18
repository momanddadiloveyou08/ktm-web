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
const sections = [

{
title:"SLIPPER CLUTCH",
image:"Screenshot 2026-06-12 120839-c.png"
},

{
title:"ADJUSTABLE WP APEX FORKS",
image:"D:\html\ktm\ktm2\Screenshot 2026-06-12 120906-c.png"
},

{
title:"NEW STANDARD IN ERGONOMICS",
image:"img3.png"
}

];

let current = 0;

const title = document.getElementById("title");
const image = document.getElementById("bikeImage");

document.getElementById("next").onclick = () => {

   current++;

   if(current >= sections.length){
      current = 0;
   }

   updateContent();
};

document.getElementById("prev").onclick = () => {

   current--;

   if(current < 0){
      current = sections.length - 1;
   }

   updateContent();
};

function updateContent(){

   title.innerHTML =
   sections[current].title;

   image.src =
   sections[current].image;
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