define(["view/TaskVT/TaskView"], function(TaskView){

    function TaskVC (target, task, indx){
        var taskView = new TaskView(task, indx)
        $(target).append(taskView.root);
        taskView.root.bind("onDelete", function(){
            console.log(this);
        });
    }

    return TaskVC;
});