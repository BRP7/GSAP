let pageCon =  document.querySelector(".page-content");
let cursor = document.querySelector(".cursor");

pageCon.addEventListener("mousemove",function(dets){
    //  console.log(dets.target;X)
    cursor.style.left = dets.x + "px";
    cursor.style.top = dets. y+ "px";
})