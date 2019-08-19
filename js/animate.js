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
    // console.log(parent);
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
                // console.log("asdasd");
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
animate("#eventsList", true, true);
animate("#pastEventsList", true, false);
// animate(".event-content", true, false);

animate(".about-section", true, false);
// animate(".watch-series-4-container", true, false);
// animate(".ipad-container", true, false);
// animate(".macbook-air-container", true, false);
// animate(".macbook-pro-container", true, false);
// animate(".ipad-pro-container", true, false);
// animate(".icard-container", true, false);
// animate(".airpods-container", true, false);
animate(".navbar", true, true);

var socialIcon = 0;
document.querySelectorAll(".social-icons").forEach(ele => {
    // console.log("asd", ele);
    var socialIconClass = `social-icon-${socialIcon}`;
    ele.classList.add(socialIconClass);
    animate("."+socialIconClass, true, false);

    socialIcon++;
})



var navbarItemCounter = 0;
document.querySelectorAll(".navv navbar-nav").forEach(ele => {
    // console.log("asd", ele);
    var navbarItem = `navbar-item-${navbarItemCounter}`;
    ele.classList.add(navbarItem);
    animate("."+navbarItem, true, false);

    navbarItemCounter++;
})

