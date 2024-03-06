let btn = document.querySelectorAll(".button");
let bdy = document.querySelector("body")

btn.forEach(function (button) {
    button.addEventListener('mouseover', function (e) {
        if (e.target.id == 'grey')
            bdy.style.backgroundColor = "grey";
        if (e.target.id == 'white')
            bdy.style.backgroundColor = "white";
        if (e.target.id == 'yellow')
            bdy.style.backgroundColor = "yellow";
        if (e.target.id == 'blue')
            bdy.style.backgroundColor = "blue";
    })
})