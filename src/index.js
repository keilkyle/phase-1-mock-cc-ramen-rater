// write your code here
const menuDiv = document.querySelector("#ramen-menu")
const ramenDetail = document.querySelector("#ramen-detail")
const form = document.querySelector("#new-ramen")

fetch("http://localhost:3000/ramens", {
    headers: {
        "ContentType": "application/json",
        "Accept": "application/json"
    }
})
.then(res => res.json())
.then(data => data.forEach(ramen => loadImage(ramen)))

function loadImage (ramen) {
    let img = document.createElement("img")
    img.src = ramen.image
    img.addEventListener("click", () => {
        ramenDetail.querySelector("img").src = ramen.image
        ramenDetail.querySelector("h2").innerText = ramen.name
        ramenDetail.querySelector("h3").innerText = ramen.restaurant
        document.querySelector("#rating-display").innerText = ramen.rating
        document.querySelector("#comment-display").innerText = ramen.comment
    })
    menuDiv.appendChild(img)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let newDish = {
        "name": e.target.name.value,
        "restaurant": e.target.restaurant.value,
        "image": e.target.image.value,
        "rating": e.target.rating.value,
        "comment": e.target.comment.value
    }
    debugger
    loadImage(newDish)
})