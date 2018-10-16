'use strict'

//Gets saved todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try{
        return todosJSON ? JSON.parse(todosJSON) : []
    }catch(e){
        return []
    }
}

//save todos to localStorage
const saveTodos = () =>{
    localStorage.setItem('todos', JSON.stringify(todos))
}

//remove todos by id
const removeTodo = (id)=>{
    const todoId = todos.findIndex((todo)=>todo.id === id)
    if (todoId > -1){
    todos.splice(todoId,1)
    }
}

//Render application todos based on filters
const renderTodos = function (todos, filters) {
    const todoEl = document.querySelector('#todos')
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)
    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0){
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    }else{
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = "There are No To-dos to show"
        todoEl.appendChild(messageEl)
    }
}

//toggles the todo completed depending on whether the checkbox is checked or not
const toggleTodo = (id)=> {
    const toggle = todos.find((todo) =>todo.id===id)
    if (toggle){
        toggle.completed = !toggle.completed
    }
}

//Get the DOM element for an individual note
const generateTodoDOM = (todo) =>{
    const todoEl = document.createElement('label')
    const containerEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const button = document.createElement('button')

    //create checkbox
    checkbox.setAttribute('type','checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change',()=>{
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })
    
    //create todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

    //setup container
    todoEl.classList.add('list-item')
    containerEl.classList.add('list-item__container')
    todoEl.appendChild(containerEl)

    //create button
    button.textContent = 'remove'
    button.classList.add('button','button--text')
    todoEl.appendChild(button)
    button.addEventListener('click',()=>{
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    return todoEl
}

//Get the DOM elements for list summary
const generateSummaryDOM=(incompleteTodos) => {
    const summary = document.createElement('h2')
    const plural = incompleteTodos.length === 1 ? '' : 's'
    summary.classList.add("list-title")
    summary.textContent = `You have ${incompleteTodos.length} todo${plural} left`
    return summary
}
