let floatDiv = document.querySelector(".float");


document.addEventListener("scroll", move)
document.getElementById("close").addEventListener("click", hide)


function move() {
    let floatPos = floatDiv.getBoundingClientRect();
    let floatOffsetTop = 50 + window.scrollY;
    console.log(floatOffsetTop);
    console.log(`${floatOffsetTop}px`);
    floatDiv.style.top=`${floatOffsetTop}px`;
}

function hide(e) {
    console.log(e.target)
    e.target.parentElement.style.display="none";
}




let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   
  let player;
  function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          
          videoId: 'qTCvqtKc1ss',
            playerVars: {'rel':0, 'showinfo':0, 'controls': 0 },
          events: {
          }
        });
      }












const playerStarter = document.getElementById("art11");

playerStarter.addEventListener("mouseover", play);
playerStarter.addEventListener("mouseleave", stop);


function play() {
    player.playVideo()
}      


function stop() {
    player.stopVideo();
}

    

















// HSL COLORS
//document.addEventListener("mousemove", colorChange)
//let hue = 0;
//let items = document.querySelectorAll(".item");
//
//function colorChange() {
//    col = `hsl(${hue}, 100%, 50%)`;
////    console.log(col)        
//    hue = hue + 0.3;
//    if (hue >= 360) {
//        hue = 0
//    }
//    items.forEach((i) => i.style.backgroundColor = col )
//    
//    return col;
//}