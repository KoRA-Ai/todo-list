var app = new Vue({
    el:'.app',
    data:{
        todolist:[],
        newtodo:''
    },
    methods:{
        addTodo: function(todo){
            this.todolist.push({content:todo,completed:false})
        },
        deleteTodo: function(todo){
            this.todolist.splice(this.todolist.indexOf(todo),1)
        }
    }

})