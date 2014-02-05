define(["collection/TaskList"], function(TaskList) {

    function TaskListVC(target){

        TaskList(function(tasks){

            var fragment = document.createDocumentFragment();
            _.each(tasks, function(task){
                task.root.appendTo(fragment);
            });

            $(target).append(fragment);

        });

    }

    return TaskListVC
});