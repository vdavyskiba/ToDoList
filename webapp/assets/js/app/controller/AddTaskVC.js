define(["view/AddTaskVT/AddTaskView"], function(TaskView){

    function AddTaskVC (opener, data){
        $("body").append(TaskView.render(data));
        $(opener).prepend(TaskView.renderBtn());
    }

    return AddTaskVC;
});