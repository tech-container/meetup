function debounce(func, wait, immediate){
    var timeout;
    return function(){
        var context = this, args=arguments;
        var later = function(){
            timeout = null;
            if(!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};


function animate(container, isChildrenAnimate=false, isOnTop=false){
    var parent = document.querySelector(container);

    var childrens = [];
    console.log(parent);
    for(var i=0;i<parent.childNodes.length;i++){

        if(parent.childNodes[i].dataset && parent.childNodes[i].dataset.animatable=="animatable"){
            parent.childNodes[i].style.opacity = '0';
            // console.log("hey9");
            childrens.push(parent.childNodes[i]);
        }
    }

    function routine(){
        var scroll_pos = document.documentElement.scrollTop + document.documentElement.clientHeight;
        var animatedCount = 0;
        // console.log("hey");
        for(var i=0;i<childrens.length;i++){
            if((childrens[i].offsetTop + childrens[i].style.height) < scroll_pos - 0.25*innerHeight || window.scrollY > document.body.scrollHeight - 1.1*innerHeight || isOnTop ){
                childrens[i].style.opacity = '0';
                childrens[i].style.transform = `translateY(${16 + i*4}px)`;
                childrens[i].style.animationDelay = String(Number(i*100)) + "ms";
                childrens[i].classList.add("slide-up-opacity-animation");
            }
            if(childrens[i].classList.contains("slide-up-opacity-animation")){
                animatedCount++;
            }
        }
        if(animatedCount === childrens.length){
            window.removeEventListener("scroll", listener);
        }
    }
    var listener = debounce(routine, 10, true);

    if(isOnTop)
        routine();
    else
        window.addEventListener("scroll", listener);
}

// animate(".banner", true, true);
animate("#upcoming_events", true, true);
animate("#past_events", true, false);
// animate(".watch-series-4-container", true, false);
// animate(".ipad-container", true, false);
// animate(".macbook-air-container", true, false);
// animate(".macbook-pro-container", true, false);
// animate(".ipad-pro-container", true, false);
// animate(".icard-container", true, false);
// animate(".airpods-container", true, false);

var footerColCounter = 0;
document.querySelectorAll(".footer-nav-links").forEach(ele => {
    // console.log("asd", ele);
    var footerColClass = `footer-col-${footerColCounter}`;
    ele.classList.add(footerColClass);
    animate("."+footerColClass, true, false);

    footerColCounter++;
})

animate()