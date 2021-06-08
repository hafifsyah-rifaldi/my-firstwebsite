function movep(){
    next = current + "px";
    current +=1;
    if(current > 750){
    current = 0;
    }
    paragraph.style.left = next;
    setTimeout(movep,18);
    }
    
    function init(){
    paragraph=document.getElementById("geser");
    paragraph.style.position="absolute";
    current=0;
    movep();
    }