var likeCount = 0;
var likeCountText = document.getElementById("likeCount");
var likeBtn = document.getElementById("likeBtn");
likeBtn.addEventListener("click", clickLike);

function clickLike() {
    likeCount += 1
    likeCountText.innerText = `${likeCount} like(s)`
}