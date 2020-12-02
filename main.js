canvas=new fabric.Canvas("myCanvas")
playerx=10;
playery=10;

blockimagewidth=30;
blockimageheight=30;

var playerobject="";
var blockimageobject="";

function playerupdate() {
    fabric.Image.fromURL("player.png",function(img){
        playerobject=img;
playerobject.scaleToWidth(150);
playerobject.scaleToHeight(150);
playerobject.set({
    top:playery,
    left:playerx
});
canvas.add(playerobject);


    });

    
}
function newimage(get_image) {
fabric.Image.fromURL(get_image,function(img){

    blockimageobject=img;
    blockimageobject.scaleToWidth(blockimagewidth);
    blockimageobject.scaleToHeight(blockimageheight);
    blockimageobject.set({

    top:playery,
    left:playerx

});
canvas.add(blockimageobject);


    });

}
window.addEventListener("keydown",my_keydown);

function my_keydown(e) {
    keypressed=e.keyCode;
    console.log(keypressed)

    if(e.shiftKey==true && keypressed=='80'){
        console.log("shift and p")
        blockimagewidth= blockimagewidth+11;
        blockimageheight= blockimageheight+11;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;

        
    }
    if(e.shiftKey==true && keypressed=='77'){
        console.log("shift and m")
        blockimagewidth= blockimagewidth-11;
        blockimageheight= blockimageheight-11;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        document.getElementById("current_height").innerHTML=blockimageheight;
}

if(keypressed=='38'){
    up();
    console.log("up");
}


if(keypressed=='40'){
    down();
    console.log("down");
}

if(keypressed=='37'){
    left();
    console.log("left");
}

if(keypressed=='39'){
    right();
    console.log("right");
}

if(keypressed=='85'){
    newimage("unique.png");
    console.log("u");
}

if(keypressed=='89'){
    newimage("yellow_wall.png");
    console.log("y");
}

if(keypressed=='71'){
    newimage("ground.png");
    console.log("g");
}

if(keypressed=='87'){
    newimage("wall.jpg");
    console.log("w");
}

if(keypressed=='76'){
    newimage("light_green.png");
    console.log("l");
}

if(keypressed=='84'){
    newimage("trunk.jpg");
    console.log("t");
}

if(keypressed=='82'){
    newimage("roof.jpg");
    console.log("r");
}

if(keypressed=='67'){
    newimage("cloud.jpg");
    console.log("c");
}

if(keypressed=='68'){
    newimage("dark_green.png");
    console.log("d");
};
        }

function up() {
     if(playery >= 0) {
         playery= playery-blockimageheight;
         console.log(blockimageheight)
         console.log(playerx,playery)
         canvas.remove(playerobject)
         playerupdate();
     }
}

function down() {
    if(playery <= 450) {
        playery= playery+blockimageheight;
        console.log(blockimageheight)
        console.log(playerx,playery)
        canvas.remove(playerobject)
        playerupdate();
    }
}

function left() {
    if(playerx >= 0) {
        playerx= playerx-blockimagewidth;
        console.log(blockimagewidth)
        console.log(playerx,playery)
        canvas.remove(playerobject)
        playerupdate();
    }
}

function right() {
    if(playerx <= 850) {
        playerx= playerx+blockimagewidth;
        console.log(blockimagewidth)
        console.log(playerx,playery)
        canvas.remove(playerobject)
        playerupdate();
    }
}
