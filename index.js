// let click = document.querySelector(".contaner")
let previous = document.querySelector(".previous")
let next = document.querySelector(".next")
let img = document.querySelector(".img")
let i = 0
let srcArray = [
    "image/butterfly.jpeg",
    "image/butterfly-3.jpg",
    "image/butterfly-5.jpg",
    "image/butterfly-1.jpeg",
    "image/butterfly2.jpg",
    "image/butterfly-4.jpg"
];

next.addEventListener("click", function () {
    i++;
    if (i > 4)
        i = 0;
    img.setAttribute("src", srcArray[i])

});
previous.addEventListener("click", function () {
    i--;
    if (i < 0)
        i = 4;
    img.setAttribute("src", srcArray[i])

});

let check = document.querySelector(".auto")
check.addEventListener("change", function () {
    if (check.checked)
        auto = setInterval(function () {
            i++;
            if (i > 4)
                i = 0;
            img.setAttribute("src", srcArray[i])
        }, 1500);

    else {
        clearInterval(auto)
    }
});
