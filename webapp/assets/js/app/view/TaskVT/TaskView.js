define(["text!view/TaskVT/Task.html", "model/Status", "text"], function(TaskTemplate, Status){

    function TaskView(task, indx){
        var view = $(render(task, indx));
        var that = this;
        this.root = view;
        view.on("click", "button[data-action=delete]", function(){
            that.root.trigger("onDelete");
        });

    }

    function render (item, indx){
        item.cssClass = item.status === Status.CLOSE ? "active" : "";
        item.formattedDate = new Date(item.date).getDate() + "/" + new Date(item.date).getMonth()+1 +"/" + new Date(item.date).getFullYear() + " " + new Date(item.date).getHours() + ":" + new Date(item.date).getMinutes();

        return _.template(TaskTemplate, {item:item, indx:indx});
    }

    return TaskView;

});