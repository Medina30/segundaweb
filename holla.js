function accionParaCuandoDigaQueSi() {
    alert ("¿Cogemos ya? o ¿como es esto?");
}
function mueveElBoton(){
    width = window.innerWidth;
    height = window.innerHeight;
    footer = window.innerFooter;
                
    newWidth = (Math.random() * width);
    newHeight = (Math.random() * height);
    

    document.getElementById("btnNo").style.position = "absolute";
    document.getElementById("btnNo").style.left = newWidth + "px";
    document.getElementById("btnNo").style.height = newHeigth + "px";
    document.getElementById("btnNo").style.footer = newFooter + "px";
    document.getElementById("btnNo").style.left = newWidth + "px";
    document.getElementById("btnNo").style.height = newHeigth + "px";
    document.getElementById("btnNo").style.left = newWidth + "px";
    document.getElementById("btnNo").style.height = newHeigth + "px";
    document.getElementById("btnNo").style.left = newWidth + "px";
    document.getElementById("btnNo").style.height = newHeigth + "px";
    document.getElementById("btnNo").style.left = newWidth + "px";
    document.getElementById("btnNo").style.height = newHeigth + "px";
    
}