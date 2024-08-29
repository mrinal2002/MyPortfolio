function revealToSpan(){

    document.querySelectorAll(".reveal").forEach(function(ele){
        var parent=document.createElement("span");
        var child=document.createElement("span");
    
        parent.classList.add("parent");
        child.classList.add("child");
    
        child.innerHTML=ele.innerHTML;
        parent.appendChild(child);
    
        ele.innerHTML="";
        ele.appendChild(parent);
    })
}

revealToSpan();

function loaderAnimation(){

    var tl=gsap.timeline();
    tl.from(".child span",{
        x:100,
        duration:1.2,
        stagger:.2,
        ease:Power3.easeInOut
    })
    .to(".parent .child",{
        y:"-100%",
        duration:1,
        ease:Circ.easeInOut
    })
    .to("#loader",{
        height:0,
        duration:1,
        ease:Circ.easeInOut
    })
    .to("#green",{
        height:"100%",
        top:0,
        duration:1,
        delay:-.8,
        ease:Circ.easeInOut
    })
    .to("#green",{
        height:"0%",
        duration:1,
        delete:-.6,
        ease:Circ.easeInOut
    })
}

// loaderAnimation();

function svgAnimation(){
    document.querySelectorAll("#Visual>g").forEach((e)=>{
        e.childNodes[1].childNodes[1].style.strokeDasharray=e.childNodes[1].childNodes[1].getTotalLength()+ 'px';
        e.childNodes[1].childNodes[1].style.strokeDashoffset=e.childNodes[1].childNodes[1].getTotalLength()+ 'px';
    })
}
