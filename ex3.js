var app = new Vue({
    el:'.app',
    data:{
        todolist:[],
        newtodo:''
    },
    methods:{
        addTodo: function(newtodo){
            if(newtodo!='')
                this.todolist.push({content:newtodo,completed:false});
        },
        deleteTodo: function(todo){
            this.todolist.splice(this.todolist.indexOf(todo),1)
        }
    }

})
