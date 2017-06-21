document.addEventListener("DOMContentLoaded", function(event) {
    var app = new Vue({
        el: "#app",
        data: {
        tasks: [
                {   text: "get groceries",
                    completed: false
                },
                {
                    text: "wash dishes",
                    completed: false
                },
                {
                    text: "laundry",
                    completed: false
                }
                ],
        newTaskText: ''
        },
        methods: {
            addTask: function() {
                if (this.newTask !== '') {
                    var newTask = {
                                    text: this.newTaskText,
                                    completed: false
                                    };
                    this.tasks.push(newTask);
                    this.newTaskText = "";     
                }
            },
            toggleComplete: function(task) {
                task.completed = !task.completed;
            }
        }
    }); 
});