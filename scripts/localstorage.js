let newTodo = document.querySelector("#newTodo");
let act = document.querySelectorAll(".act-child")

let todos = document.querySelectorAll(".todo");

let accept = document.querySelector(".addTodoButton");
let test = document.querySelector(".test");

class LocalstorageUtil {
    constructor() {
        this.keyNameTodo = "todos";
        this.keyNameAct = "act";
    }

    getTodo() {
        const todoLocalStorage = localStorage.getItem(this.keyNameTodo);
        if(todoLocalStorage !== null){
            return JSON.parse(todoLocalStorage);
        }
        return []
    }
    getAct() {
        const actLocalStorage = localStorage.getItem(this.keyNameAct);

        if(actLocalStorage !== null){
            return  JSON.parse(actLocalStorage);
        }
        return  [];
    }
    // setDefaultTodo () {
    //     act.forEach(act => {
    //         localStorageUtil.putTodo(act.innerHTML)
    //     })
    // }
    putTodo(id, act){
        let todos = this.getTodo();
        todos.push(id);
        localStorage.setItem(this.keyNameTodo, JSON.stringify(todos))

        let acts = this.getAct()
        acts.push(act);
        localStorage.setItem(this.keyNameAct, JSON.stringify(acts));
        document.body.append(act)
    }
    setNewAct(id,item){
        let newItem = document.createElement("div");
        newItem.classList.add("todo");

        let todoTitleContainer = document.createElement("div");
        todoTitleContainer.classList.add("todo-title-container");

        let todoStateContainer = document.createElement("div");
        todoStateContainer.classList.add("todo-state-container");

        let textTodo = document.createElement("p");
        textTodo.innerHTML = item.value;
        let todoDoneButton = document.createElement("button")

        todoDoneButton.classList.add("todo-state");
        todoDoneButton.classList.add("done")
        todoDoneButton.innerHTML = "&#10004;";

        let todoCancelButton = document.createElement("button")
        todoCancelButton.classList.add("todo-state");
        todoCancelButton.classList.add("cancel")
        todoCancelButton.innerHTML = "&#10006";

        let todoDeleteButton = document.createElement("button")
        todoDeleteButton.classList.add("todo-state");
        todoDoneButton.classList.add("delete")
        todoDeleteButton.innerHTML = "&#128465;";

        newItem.append(todoTitleContainer);
        newItem.append(todoStateContainer);

        todoTitleContainer.append(textTodo);

        todoStateContainer.append(todoDoneButton)
        todoStateContainer.append(todoCancelButton)
        todoStateContainer.append(todoDeleteButton)
        this.putTodo(id, newItem)
        console.log (newItem)
    }

}

let localStorageUtil = new LocalstorageUtil()
// localStorageUtil.setDefaultTodo()
let sendTodo = () => {
    if(newTodo.value != ""){
        localStorageUtil.setNewAct(newTodo.value, newTodo.value)
        newTodo.value = ""
    }
    else{
        return false;
    }
}
accept.addEventListener("click", sendTodo)
// localStorage.clear()

