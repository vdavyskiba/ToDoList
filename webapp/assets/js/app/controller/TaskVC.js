define(["view/TaskVT/TaskView"], function(TaskView){

    function TaskVC (task, indx){
        var taskView = new TaskView(task, indx);

        taskView.root.bind("onDelete", function(){
            console.log(this);
        });

        return taskView;
    }

    return TaskVC;
});