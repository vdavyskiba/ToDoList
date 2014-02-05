define(["text!view/AddTaskVT/AddTask.html", "text!view/AddTaskVT/AddTaskBtn.html", "text"], function(AddTask, AddTaskBtn){

    return {
        render : function(data){
            //_.each(data, function(item){});
            return  _.template(AddTask, {items:data});
        },
        renderBtn: function(){
            return _.template(AddTaskBtn);
        }
    };
});