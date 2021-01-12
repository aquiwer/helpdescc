let mainContainer = document.querySelector(".types-container");
let addModal = document.querySelector(".js-add");
let editModal = document.querySelector(".js-edit");
let finishModal = document.querySelector(".js-finish");
let openAddWindow = document.querySelector(".add")
let openEditWindow = document.querySelector(".edit")
let openShowWindow = document.querySelector(".show")
let openFinishWindow = document.querySelector(".finish")
let closes = document.querySelectorAll(".js-close")
let finishTodos = document.querySelectorAll(".finish-button")
let cancelFinishTodos = document.querySelectorAll(".cancel-finish-button")
let finishContainer = document.querySelectorAll(".modal-finish-container")

closes.forEach(close => {
    close.addEventListener("click", evt =>{
        evt.target.parentNode.parentNode.style.display = 'none'
    })
})
finishTodos.forEach(finishTodo =>{
     finishTodo.addEventListener("click", evt => {

     })
})
mainContainer.addEventListener("click", evt => {
    if(evt.target === openAddWindow){
        addModal.style.display = 'flex'
    }
    if(evt.target === openEditWindow){
        editModal.style.display = 'flex'
    }
    if(evt.target === openFinishWindow){
        finishModal.style.display = 'flex'
    }
})
finishContainer.forEach(container => {
    container.addEventListener("click", evt => {
        finishTodos.forEach(finish => {
            if(evt.target === finish){
                evt.target.parentNode.parentNode.style.background = "#00a03e";
                evt.target.parentNode.parentNode.style.color = "#f2f2f2";
            }
        })
        cancelFinishTodos.forEach(cancel => {
            if(evt.target === cancel){
                evt.target.parentNode.parentNode.style.background = "transparent";
                evt.target.parentNode.parentNode.style.color = "#333";
            }
        })
    })
})