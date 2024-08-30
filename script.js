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

function valueSetters(){
    gsap.set("#nav a",{y:"-100%",opacity:0});
    gsap.set("#home span .child",{y:"100%"});
    gsap.set("#home .row img",{opacity:0});

    document.querySelectorAll("#Visual>g").forEach((e)=>{
        e.childNodes[1].childNodes[1].style.strokeDasharray=e.childNodes[1].childNodes[1].getTotalLength()+ 'px';
        e.childNodes[1].childNodes[1].style.strokeDashoffset=e.childNodes[1].childNodes[1].getTotalLength()+ 'px';
    })
}

function loaderAnimation(){
    var tl=gsap.timeline();
    tl.from("#loader .child span",{
        x:100,
        duration:1.2,
        stagger:.2,
        ease:Power3.easeInOut
    })
    .to("#loader .parent .child",{
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
        delay:-.4,
        ease:Circ.easeInOut,
        onComplete:function(){
            animationHomePage();
        }
        
    })
}

function svgAnimation(){
    
    gsap.to("#Visual>g>g>path,#Visual>g>g>polyline",{
        strokeDashoffset:0,
        duration:2,
        ease:Expo.easeInOut
    })
}

function animationHomePage(){
   
    var tl=gsap.timeline();
    tl.to("#nav a",{
        y:0,
        opacity:1,
        stagger:.05,
        ease:Expo.easeInOut
    })
    .to("#home .parent .child",{
        y:0,
        duration:1.5,
        ease:Expo.easeInOut,
        stagger:.1
    })
    .to("#home .row img",{
        opacity:1,
        delay:-.5,
        ease:Expo.easeInOut,
        onComplete:function(){
            svgAnimation();
        }
    })
}

function locoInitilize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}

function cardShow(){
    var showimg="";
    document.querySelectorAll(".cnt").forEach(function(cnt){
        cnt.addEventListener("mousemove",function(dets){
            // console.log(dets.target.dataset.index);
            // console.log(document.querySelector("#cursor").children[0]);
            showimg=dets.target;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
            showimg.style.filter="grayscale(1)";
            document.querySelector("#work").style.backgroundColor=dets.target.dataset.color;
        })
        cnt.addEventListener("mouseleave",function(dets){
            document.querySelector("#cursor").children[showimg.dataset.index].style.opacity=0;
            showimg.style.filter="grayscale(0)";
            document.querySelector("#work").style.backgroundColor="#fff";

        })
    })
}

locoInitilize();
revealToSpan();
valueSetters();
loaderAnimation();
cardShow();
