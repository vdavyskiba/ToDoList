define(["GetTaskList", "controller/TaskVC", "controller/AddTaskVC"], function(getTaskList, TaskVC, AddTaskVC) {
    $(function() {
        GetTaskList(function(data){
            _.each(data, function(elem, indx){
                TaskVC("#taskList", elem, indx);
            });


        });

        AddTaskVC("#controls", []);

    });
});