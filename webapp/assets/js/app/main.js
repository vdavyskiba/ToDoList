define(["controller/TaskListVC", "controller/AddTaskVC"], function(TaskListVC, AddTaskVC) {
    $(function() {

        var App = function(){

            new TaskListVC("#taskList");

            new AddTaskVC("#controls", []);
        };

        return new App();


    });
});