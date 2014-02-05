define(["controller/TaskVC"], function(TaskVC){

    function TaskList(callback){
        var tasks = [];
        return getTaskList(function(data){
            _.each(data, function(elem, indx){
                tasks.push(new TaskVC(elem, indx));
            });
            return callback(tasks);
        });
    }

    function getTaskList(callback){
        $.ajax({
            url: "/todolist/ToDoList/webapp/mock-tasks.json",
            dataType: 'json',
            success: function(data){
                callback(data);
            },
            error: function(error){
                console.log(error);
            }
        });
    }

    return TaskList;
});