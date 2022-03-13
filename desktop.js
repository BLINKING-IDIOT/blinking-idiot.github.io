const bgs=["bg/bg1.jpg","bg/bg2.jpg","bg/bg3.jpg","bg/bg4.jpg","bg/bg5.jpg","bg/bg6.jpg"]
var item = bgs[Math.floor(Math.random()*bgs.length)];
document.body.style.backgroundImage = "url("+item+")";