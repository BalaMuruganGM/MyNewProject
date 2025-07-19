// nav style start

    let navBar = 1;

    function navpar(){
        if(navBar==1){
            document.querySelector('.resIcon .xmarNav').style.display = "flex";
            document.querySelector('.resIcon .navBar').style.display = "none";    
            document.querySelector('.responsiveNav').style.left="0px";
            navBar = 2;
        }
        else{
            document.querySelector('.resIcon .xmarNav').style.display = "none";
            document.querySelector('.resIcon .navBar').style.display = "flex";    
            document.querySelector('.responsiveNav').style.left="-100%";
            navBar=1;
        }

    }

// nav style clouses 

let imgScroll1 =100;
function leftscroll1() {
    if (imgScroll1 < 400) {
        document.querySelector('.scrollImg-1').style.left = '-'+imgScroll1+'%';
        imgScroll1 =  imgScroll1+100;
    }
}

function rightscroll1(){
    if (imgScroll1 > 0) {
        imgScroll1 = imgScroll1 - 100;
        document.querySelector('.scrollImg-1').style.left = '-'+imgScroll1+'%';
    }
}



let imgScroll2 =100;
function leftscroll2() {
    if (imgScroll2 < 400) {
        document.querySelector('.scrollImg-2').style.left = '-'+imgScroll2+'%';
        imgScroll2 =  imgScroll2+100;
    }
}

function rightscroll2(){
    if (imgScroll2 > 0) {
        imgScroll2 = imgScroll2 - 100;
        document.querySelector('.scrollImg-2').style.left = '-'+imgScroll2+'%';
    }
}


let imgScroll3 =100;
function leftscroll3() {
    if (imgScroll3 < 400) {
        document.querySelector('.scrollImg-3').style.left = '-'+imgScroll3+'%';
        imgScroll3 =  imgScroll3+100;
    }
}

function rightscroll3(){
    if (imgScroll3 > 0) {
        imgScroll3 = imgScroll3 - 100;
        document.querySelector('.scrollImg-3').style.left = '-'+imgScroll1+'%';
    }
}


let imgScroll4 =100;
function leftscroll4() {
    if (imgScroll4 < 400) {
        document.querySelector('.scrollImg-4').style.left = '-'+imgScroll4+'%';
        imgScroll4 =  imgScroll4+100;
    }
}

function rightscroll4(){
    if (imgScroll4 > 0) {
        imgScroll4 = imgScroll4 - 100;
        document.querySelector('.scrollImg-4').style.left = '-'+imgScroll4+'%';
    }
}


let imgScroll5 =100;
function leftscroll5() {
    if (imgScroll5 < 400) {
        document.querySelector('.scrollImg-5').style.left = '-'+imgScroll5+'%';
        imgScroll5 =  imgScroll5+100;
    }
}

function rightscroll5(){
    if (imgScroll5 > 0) {
        imgScroll5 = imgScroll5 - 100;
        document.querySelector('.scrollImg-5').style.left = '-'+imgScroll5+'%';
    }
}


let imgScroll6 =100;
function leftscroll6() {
    if (imgScroll6 < 400) {
        document.querySelector('.scrollImg-6').style.left = '-'+imgScroll6+'%';
        imgScroll6 =  imgScroll6+100;
    }
}

function rightscroll6(){
    if (imgScroll6 > 0) {
        imgScroll6 = imgScroll6 - 100;
        document.querySelector('.scrollImg-6').style.left = '-'+imgScroll6+'%';
    }
}


// Listing page clouses


// popular page start 



// let Lpopular = 25;
// function popularLeft(){
//     if(Lpopular<100){
//         document.querySelector('.LpopularScroll').style.left = "-"+Lpopular+"%";
//         Lpopular = Lpopular+25;
//     }
// }

// function popularRight(){
//     if(Lpopular>0){
//         Lpopular = Lpopular-25;
//         document.querySelector('.LpopularScroll').style.left = "-"+Lpopular+"%";
//     }
// }

// popular page clouses

// Logos page start

// let logoScroll = 100;

// function LogoLeft(){
//     if(logoScroll<400){
//         document.querySelector('.LogoScroll').style.left = "-"+logoScroll+"%";
//         logoScroll = logoScroll+100;    
//     }
// }

// function LogoRight(){
//     if(logoScroll>0){
//         logoScroll = logoScroll-100;
//         document.querySelector('.LogoScroll').style.left = "-"+logoScroll+"%";    
//     }
// }



let logoScroll = 0;

function LogoLeft() {
  if (logoScroll < 300) { 
    logoScroll += 100;
    document.querySelector('.LogoScroll').style.left = "-" + logoScroll + "%";
updatePulliColor(logoScroll / 100 + 1);  }
}

// Arrow Right Click → Move left visually
function LogoRight() {
  if (logoScroll > 0) {
    logoScroll -= 100;
    document.querySelector('.LogoScroll').style.left = "-" + logoScroll + "%";
updatePulliColor(logoScroll / 100 + 1);  }
}


document.addEventListener('DOMContentLoaded', () => {
  const scrollWrapper = document.querySelector('.LogoScrollTag');
  const scrollContent = document.querySelector('.LogoScroll');

  let isDragging = false;
  let startX = 0;
  let dragDiff = 0;

  function updatePosition() {
    scrollContent.style.left = `-${logoScroll}%`;
    updatePulliColor(logoScroll / 100 + 1);
  }

  function dragStart(x) {
    isDragging = true;
    startX = x;
    dragDiff = 0;
    scrollContent.style.transition = 'none';
  }

  function dragMove(x) {
    if (!isDragging) return;

    dragDiff = x - startX;
    const containerWidth = scrollWrapper.offsetWidth;
    const pixelOffset = (logoScroll / 100) * containerWidth - dragDiff;
    scrollContent.style.left = `-${pixelOffset}px`;
  }

  function dragEnd() {
    if (!isDragging) return;

    isDragging = false;
    scrollContent.style.transition = 'all 0.3s';

    const containerWidth = scrollWrapper.offsetWidth;
    const movePercent = (dragDiff / containerWidth) * 100;

    if (movePercent > 20 && logoScroll > 0) {
      logoScroll -= 100;
    } else if (movePercent < -20 && logoScroll < 300) {
      logoScroll += 100;
    }

    updatePosition();
  }

  // Mouse
  scrollWrapper.addEventListener('mousedown', (e) => dragStart(e.clientX));
  scrollWrapper.addEventListener('mousemove', (e) => dragMove(e.clientX));
  document.addEventListener('mouseup', dragEnd);

  // Touch (mobile + tablet)
  scrollWrapper.addEventListener('touchstart', (e) => dragStart(e.touches[0].clientX));
  scrollWrapper.addEventListener('touchmove', (e) => {
    dragMove(e.touches[0].clientX);
    e.preventDefault();
  }, { passive: false });
  scrollWrapper.addEventListener('touchend', dragEnd);
});





// if(logoScroll == 100){
//     document.querySelector('.pulli-2').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-3').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-4').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-1').style.backgroundColor = "blue";
// }else if(logoScroll==200){
    
//     document.querySelector('.pulli-1').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-3').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-4').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-2').style.backgroundColor = "blue";

// }else if(logoScroll==300){
//     document.querySelector('.pulli-1').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-2').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-4').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-3').style.backgroundColor = "blue";

// }else if(logoScroll==400){
//     document.querySelector('.pulli-1').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-2').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-3').style.backgroundColor = "#fff";
//     document.querySelector('.pulli-4').style.backgroundColor = "blue";

// }

function updatePulliColor(index) {
  // Reset all to white
  document.querySelectorAll('.pulliTag p').forEach(p => {
    p.style.backgroundColor = "#fff";
  });

  // Set the selected one to blue
  const selected = document.querySelector(`.pulli-${index}`);
  if (selected) selected.style.backgroundColor = "blue";
}


function pulli1(){
    document.querySelector('.LogoScroll').style.left = 0+"%"
    document.querySelector('.pulli-2').style.backgroundColor = "#fff";
    document.querySelector('.pulli-3').style.backgroundColor = "#fff";
    document.querySelector('.pulli-4').style.backgroundColor = "#fff";
    document.querySelector('.pulli-1').style.backgroundColor = "blue";
    updatePulliColor(1);
}


function pulli2(){
    document.querySelector('.LogoScroll').style.left = -100+"%"
    document.querySelector('.pulli-1').style.backgroundColor = "#fff";
    document.querySelector('.pulli-3').style.backgroundColor = "#fff";
    document.querySelector('.pulli-4').style.backgroundColor = "#fff";
    document.querySelector('.pulli-2').style.backgroundColor = "blue";
    updatePulliColor(2);
}

function pulli3(){
    document.querySelector('.LogoScroll').style.left = -200+"%"
    document.querySelector('.pulli-1').style.backgroundColor = "#fff";
    document.querySelector('.pulli-2').style.backgroundColor = "#fff";
    document.querySelector('.pulli-4').style.backgroundColor = "#fff";
    document.querySelector('.pulli-3').style.backgroundColor = "blue";
    updatePulliColor(3);
}

function pulli4(){
    document.querySelector('.LogoScroll').style.left = -300+"%"
    document.querySelector('.pulli-1').style.backgroundColor = "#fff";
    document.querySelector('.pulli-2').style.backgroundColor = "#fff";
    document.querySelector('.pulli-3').style.backgroundColor = "#fff";
    document.querySelector('.pulli-4').style.backgroundColor = "blue";
    updatePulliColor(4);
}



// function pulliTag1(){
//     document.querySelector('.resLogo-2').style.display="none";
//     document.querySelector('.resLogo-3').style.display="none";
//     document.querySelector('.resLogo-4').style.display="none";
//     document.querySelector('.resLogo-1').style.display="flex";
//     document.querySelector('.pulliTwo-2').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-3').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-4').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-1').style.backgroundColor = "blue";

// }


// function pulliTag2(){
//     document.querySelector('.resLogo').style.display="none";
//     document.querySelector('.resLogo-1').style.display="none";
//     document.querySelector('.resLogo-3').style.display="none";
//     document.querySelector('.resLogo-4').style.display="none";
//     document.querySelector('.resLogo-2').style.display="flex";
//     document.querySelector('.pulliTwo-1').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-3').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-4').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-2').style.backgroundColor = "blue";
// }

// function pulliTag3(){
//     document.querySelector('.resLogo').style.display="none";
//     document.querySelector('.resLogo-1').style.display="none";
//     document.querySelector('.resLogo-2').style.display="none";
//     document.querySelector('.resLogo-4').style.display="none";       
//     document.querySelector('.resLogo-3').style.display="flex";
//     document.querySelector('.pulliTwo-1').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-2').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-4').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-3').style.backgroundColor = "blue";

// }

// function pulliTag4(){
//     document.querySelector('.resLogo').style.display="none";
//     document.querySelector('.resLogo-1').style.display="none";
//     document.querySelector('.resLogo-2').style.display="none";
//     document.querySelector('.resLogo-3').style.display="none";
//     document.querySelector('.resLogo-4').style.display="flex";
//     document.querySelector('.pulliTwo-1').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-2').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-3').style.backgroundColor = "#fff";
//     document.querySelector('.pulliTwo-4').style.backgroundColor = "blue";
// }

// Logos page clouses

// LogoOption Start

function make(){
    document.querySelector('.Lpopular').style.display = "none";
    document.querySelector('.LPrice').style.display = "none";
    document.querySelector('.Lbody').style.display = "none";
    document.querySelector('.Lseats').style.display = "none";
    document.querySelector('.LogoScrollTag').style.display = "flex";
    document.querySelector('.LogoArrow').style.display = "flex";
    document.querySelector('.pulliTag').style.display = "flex";
    document.querySelector('.makeBut').style.cssText = "border: 2px solid blue; color: blue;";
    document.querySelector('.popularMBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.LpriceBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLBodyBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLseats').style.cssText = "border: 1px solid gray; color:black;";
    // document.querySelector('.pulliTagTwo').style.display = "flex";
    // document.querySelector('.pulliTag').style.display = "none";

}


function HLpopular(){
    // document.querySelector('.Lpopular').style.display = "flex";
    document.querySelector('.Lpopular').style.cssText = "display:flex;transition: all 30s;";
    document.querySelector('.LPrice').style.display = "none";
    document.querySelector('.Lbody').style.display = "none";
    document.querySelector('.Lseats').style.display = "none";
    document.querySelector('.LogoScrollTag').style.display = "none";
    document.querySelector('.LogoArrow').style.display = "none";
    document.querySelector('.pulliTag').style.display = "none";
    document.querySelector('.makeBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.popularMBut').style.cssText = "border: 2px solid blue; color: blue;";
    document.querySelector('.LpriceBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLBodyBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLseats').style.cssText = "border: 1px solid gray; color:black;";
    // document.querySelector('.pulliTagTwo').style.display = "none";
}



function HLprice(){
    document.querySelector('.Lpopular').style.display = "none";
    document.querySelector('.LPrice').style.display = "grid";
    document.querySelector('.Lbody').style.display = "none";
    document.querySelector('.Lseats').style.display = "none";
    document.querySelector('.LogoScrollTag').style.display = "none";
    document.querySelector('.LogoArrow').style.display = "none";
    document.querySelector('.pulliTag').style.display = "none";
    document.querySelector('.makeBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.popularMBut').style.cssText = "border: 2px solid gray; color:black;";
    document.querySelector('.LpriceBut').style.cssText = "border: 1px solid blue; color:black;";
    document.querySelector('.HLBodyBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLseats').style.cssText = "border: 1px solid gray; color:black;";

}


function HLBody(){
    document.querySelector('.Lpopular').style.display = "none";
    document.querySelector('.LPrice').style.display = "none";
    document.querySelector('.Lbody').style.display = "grid";
    document.querySelector('.Lseats').style.display = "none";
    document.querySelector('.LogoScrollTag').style.display = "none";
    document.querySelector('.LogoArrow').style.display = "none";
    document.querySelector('.pulliTag').style.display = "none";

    document.querySelector('.makeBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.popularMBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.LpriceBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLBodyBut').style.cssText = "border: 2px solid blue; color: blue;";
    document.querySelector('.HLseats').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.pulliTagTwo').style.display = "none";

}

function HLSeats(){
    document.querySelector('.Lpopular').style.display = "none";
    document.querySelector('.LPrice').style.display = "none";
    document.querySelector('.Lbody').style.display = "none";
    document.querySelector('.Lseats').style.display = "grid";
    document.querySelector('.LogoScrollTag').style.display = "none";
    document.querySelector('.LogoArrow').style.display = "none";
    document.querySelector('.pulliTag').style.display = "none";

    document.querySelector('.makeBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.popularMBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.LpriceBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLBodyBut').style.cssText = "border: 1px solid gray; color:black;";
    document.querySelector('.HLseats').style.cssText = "border: 2px solid blue; color: blue;";
    document.querySelector('.pulliTagTwo').style.display = "none";

}


// other formula start

// other formula clouses

function fadeOutAndHide(elem) {
    elem.style.transition = "opacity 0.3s ease";
    elem.style.opacity = 0;
    setTimeout(() => {
        elem.style.display = "none";
    }, 300);
}

function fadeInAndShow(elem, displayType = "flex") {
    elem.style.display = displayType;
    elem.style.opacity = 0;
    elem.style.transition = "opacity 0.3s ease";
    setTimeout(() => {
        elem.style.opacity = 1;
    }, 10);
}

// Example function call (like your HLpopular)
function showPopularAndHideOthers() {
    fadeInAndShow(document.querySelector('.Lpopular'));        // Show this
    fadeOutAndHide(document.querySelector('.LPrice'));         // Hide others
    fadeOutAndHide(document.querySelector('.Lbody'));
    fadeOutAndHide(document.querySelector('.Lseats'));
}



// location 


document.querySelector('.firstHome').addEventListener('click', () => {
    location.href = "./index.html";
});

// document.querySelector('.secondHome').addEventListener('click', () => {
//     location.href = "./index.php";
// });

document.querySelector('.secondAbout').addEventListener('click', () => {
    location.href = "./about.html";
});

document.querySelector('.secondContact').addEventListener('click', () => {
    location.href = "./contact.html";
});

document.querySelector('.secondBlog').addEventListener('click', () => {
    location.href = "./Listing.html";
});


document.querySelector('.resHome').addEventListener('click', () => {
    location.href = "./index.html";
});

document.querySelector('.resAbout').addEventListener('click', () => {
    location.href = "./about.html";
});


document.querySelector('.resContact').addEventListener('click', () => {
    location.href = "./contact.html";
});

document.querySelector('.resBlog').addEventListener('click', () => {
    location.href = "./Listing.html";
});


// Slide section functionality

document.addEventListener('DOMContentLoaded', () => {
  const slideContainer = document.querySelector('.sildeBoxDynamic');

  let isDragging = false;
  let startX;
  let scrollLeft;

  // Scroll buttons
  window.slideScrollLeft = function () {
    slideContainer.scrollBy({
      left: 280,
      behavior: 'smooth'
    });
  };

  window.slideScrollRight = function () {
    slideContainer.scrollBy({
      left: -280,
      behavior: 'smooth'
    });
  };

  // Mouse drag
  slideContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - slideContainer.offsetLeft;
    scrollLeft = slideContainer.scrollLeft;
    slideContainer.style.cursor = 'grabbing';
  });

  slideContainer.addEventListener('mouseleave', () => {
    isDragging = false;
    slideContainer.style.cursor = 'grab';
  });

  slideContainer.addEventListener('mouseup', () => {
    isDragging = false;
    slideContainer.style.cursor = 'grab';
  });

  slideContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slideContainer.offsetLeft;
    const walk = (x - startX); // Drag speed
    slideContainer.scrollLeft = scrollLeft - walk;
  });

  // Touch drag
  slideContainer.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX - slideContainer.offsetLeft;
    scrollLeft = slideContainer.scrollLeft;
  });

  slideContainer.addEventListener('touchend', () => {
    isDragging = false;
  });

  slideContainer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX - slideContainer.offsetLeft;
    const walk = (x - startX);
    slideContainer.scrollLeft = scrollLeft - walk;
  });
});
