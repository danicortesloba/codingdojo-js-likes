let countOne = 0
let countTwo = 0
let countThree = 0

function clickLike (element) {
    if(element === document.getElementById("likeBtn1")){
        let text = document.getElementById("1")
        countOne ++
        text.innerText = `${countOne} likes(s)`
    } else if (element === document.getElementById("likeBtn2")){
        let text = document.getElementById("2")
        countTwo ++
        text.innerText = `${countTwo} likes(s)`
    }
    else if (element === document.getElementById("likeBtn3")){
        let text = document.getElementById("3")
        countThree ++
        text.innerText = `${countThree} likes(s)`
    }
}

