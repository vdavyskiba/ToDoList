define(function(){

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

    return getTaskList;
});