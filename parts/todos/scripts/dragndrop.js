
let defaultColumn = document.querySelectorAll( ".planning" );

let addTodo = document.querySelector ( "#addTodo" );

let close = document.querySelector ( "#close" );

let todoContent = document.querySelector ( "#todoContent" );

let modalContainer = document.querySelector ( ".addNewTodo" );


let dragElems = document.querySelectorAll ( ".column" );
let progressColumn = document.querySelector(".progressing")
let dragZone = document.querySelectorAll ( ".planning-main" );

let deleteTodo = document.querySelectorAll ( ".delete" );

let dragElemsState = []


modalContainer.addEventListener ( "click", evt => {

    switch (evt.target) {
        case close:
            modalContainer.style.display = 'none'
            break;
        case addTodo:
            if ( todoContent.value !== "" ) {
                let newTodo = document.createElement ( "div" );
                let todoText = document.createElement ( "p" );
                let todoDel = document.createElement ( "span" );
                newTodo.append ( todoText )
                newTodo.append ( todoDel )
                newTodo.classList.add ( "column" );
                todoText.innerHTML = todoContent.value;
                todoDel.innerHTML = "&#128465;"
                todoDel.classList.add ( "delete" )
                todoDel.addEventListener("click", () =>{
                    newTodo.style.display = 'none'
                })
                console.log ( todoDel )
                newTodo.draggable = true
                todoContent.value = "";
                dragElemsState.push ( newTodo )
                progressColumn.prepend ( newTodo )

            }
            break;
    }

} )

dragElems.forEach ( d => {
    d.draggable = true
    dragElemsState.push ( d );
} )
let draggedItem = null

dragZone.forEach(dragZone =>{
    dragZone.addEventListener ( "click", evt => {
        deleteTodo.forEach ( deleteTodo => {
            if ( evt.target === deleteTodo ) {
                evt.target.parentNode.style.display = 'none'
            }
        } )
    } )
})
let dragNDrop = () => {

    for (let i = 0; i < dragElemsState.length; i++) {

        let item = dragElemsState[i];

        item.addEventListener ( "dragstart", () => {
            setTimeout ( () => {
                draggedItem = item;
                item.style.display = 'none'
            }, 0 )
        } )
        item.addEventListener ( "dragend", () => {
            setTimeout ( () => {
                draggedItem.style.display = "flex"
                draggedItem = null;
            }, 0 )
        } )
        for (let j = 0; j < dragZone.length; j++) {

            let zone = dragZone[j];

            zone.addEventListener ( "dragover", e => {
                e.preventDefault ()
            } )

            zone.addEventListener ( "dragenter", e => {
                e.preventDefault ()
            } )
            zone.addEventListener ( "dragleave", e => {
                e.preventDefault ()
            } )
            zone.addEventListener ( "drop", e => {
                e.preventDefault ()
                zone.append ( draggedItem )
            } )
        }



    }
}

dragNDrop ()

// <i class="fas fa-times-circle"></i>