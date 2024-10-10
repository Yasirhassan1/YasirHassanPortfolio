
const header = document.getElementsByTagName('header')[0];
const menuIcon = document.getElementById('menu');
const sideBar = document.getElementById("sideBar")
const cross = document.getElementById("exit")
// const ball1 = document.querySelector("#ball1")
// const ball2 = document.querySelector("#ball2")
// const ball3 = document.querySelector("#ball3")
// const ball4 = document.querySelector("#ball4")
// const ball5 = document.querySelector("#ball5")
// const ball6 = document.querySelector("#ball6")
// let codingTopContainer = document.querySelectorAll(".codingTopContainer img")
// const sortAscendingBtn = document.getElementById("sortAscendingBtn")
// let balls = [ball3, ball1, ball6, ball5, ball2, ball4];



// function removeItems(){
//   codingTopContainer.forEach(function(item){
//     item.remove();
//   })
// }

// function changeElments(i){
//     codingTopContainer.append(balls[i])

// }

// function sortAscending(){
//   removeItems();
//   for(let i = 0; i<balls.length; i++){
//     for(let j = i+1; j<balls.length; j++){
//       if(balls[i].naturalWidth > balls[j].naturalWidth){
//          let temp = balls[i];
//          balls[i] = balls[j];
//          balls[j] = temp;
//       }
//     }
//     //showAnimation(i, j);
//     changeElments(i);
   
//   }


// }

// sortAscendingBtn.addEventListener("click", function(){
//  // alert("dlkfj")
//  sortAscending();
// })
menuIcon.addEventListener('click', function() {
sideBar.style.display = "flex";
});

exit.addEventListener("click", function(){
  sideBar.style.display = "none"
})

var typed = new Typed('#element', {
  strings: ['Front-end Developer.', 'Content Creater.', 'Web Designer.', 'Front-end Developer.'],
  typeSpeed: 50,
});




let lastScrollTop = 0;
let final = 0;
window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  if(currentScroll == 0){
    header.style.display = "block"
    sideBar.style.display = "none"
    
  }

  if (currentScroll > lastScrollTop) {
     
      header.style.display = "none"
       sideBar.style.display = "none"
    
  } else if(final >10) {
    
      header.style.display = "block"
      // header.style.borderBottom = "none"
    
  }
  final = lastScrollTop-currentScroll;
  lastScrollTop = currentScroll;
 
});
window.botpressWebChat.onEvent(
  function () {
      window.botpressWebChat.sendEvent({ type: "show" });
  },
  ["LIFECYCLE.LOADED"]
);






