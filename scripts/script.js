
let addWindow = document.querySelectorAll ( ".add" );
let modalAddWindow = document.querySelector ( ".modalAddWindow" );
let editWindow = document.querySelector( ".edit" );
let modalEditWindow = document.querySelector ( ".modalEditWindow" );
let modalWindow = document.querySelectorAll ( ".types-change" );
let closeWindowBtns = document.querySelectorAll ( ".closeWindow" );

let closeWindow = (window) => {
    window.style.display = "none"
}
let openWindow = (window) => {
    window.style.display = "flex";
}
for (i = 0; i < closeWindowBtns.length; i++) {
    modalWindow.forEach ( window => {
        closeWindowBtns[i].addEventListener ( "click", () => {
            closeWindow ( window )
        } )
    } )
}

editWindow.addEventListener ( "click", () => {
    openWindow ( modalEditWindow )
} )
addWindow.forEach ( addWindow => {
    addWindow.addEventListener ( "click", () => {
        openWindow(modalAddWindow)

    } )
} )
let showTodos = document.querySelector ( ".show" );

showTodos.addEventListener ( "click", () => {
    document.location.href = '../todos/todos.html'
} )

