var likeCount1 = 0;
var likeCountText1 = document.getElementById("likeCount1");
var likeBtn1 = document.getElementById("likeBtn1");
likeBtn1.addEventListener("click", clickLike1);

function clickLike1() {
    likeCount1 += 1
    likeCountText1.innerText = `${likeCount1} like(s)`
}

var likeCount2 = 0;
var likeCountText2 = document.getElementById("likeCount2");
var likeBtn2 = document.getElementById("likeBtn2");
likeBtn2.addEventListener("click", clickLike2);

function clickLike2() {
    likeCount2 += 1
    likeCountText2.innerText = `${likeCount2} like(s)`
}

var likeCount3 = 0;
var likeCountText3 = document.getElementById("likeCount3");
var likeBtn3 = document.getElementById("likeBtn3");
likeBtn3.addEventListener("click", clickLike3);

function clickLike3() {
    likeCount3 += 1
    likeCountText3.innerText = `${likeCount3} like(s)`
}