const todo=[{
    text: "go to gym",
    completed: true
},{
    text: "eat lunch",
    completed: false
},{
    text: "go to rev",
    completed: true
},{
    text: "make chai",
    completed: false
}]

const sorttodo = function(todo){
    todo.sort(function(a,b){
        if (a.completed < b.completed){
            return -1
        }else if(a.completed > b.completed){
            return 1
        }else{
            return 0
        }
    })
}
sorttodo(todo)
console.log(todo)