let reviewMain = document.querySelector(".review-section");
let header = document.querySelector("header");
let footer = document.querySelector("footer");
reviewMain.style.maxHeight = document.documentElement.clientHeight - header.offsetHeight - footer.offsetHeight + "px";


let likes = document.querySelectorAll(".like");
let reviews = document.querySelectorAll(".review");

reviews.forEach(review => {
    review.addEventListener("click", evt => {
        likes.forEach(like =>{
            like.addEventListener("click", () => {
                if(like.classList.contains("far")){
                    like.classList.remove("far")
                    like.classList.add("fas")
                    like.style.color = '#FA0026'
                }
                else{
                    like.classList.remove("fas")
                    like.classList.add("far")
                    like.style.color = "#333"
                }
            })
        })
    })
})

let closeWindow = document.querySelector(".js-close");
let addModal = document.querySelector(".js-addReview");
let addModalButton = document.querySelector(".addReview");
addModalButton.addEventListener("click", evt => {
    addModal.style.display = 'flex'
})
closeWindow.addEventListener("click", evt => {
    evt.target.parentNode.parentNode.style.display = 'none'
})