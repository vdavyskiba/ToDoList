define(["model/User","model/Status"], function(User, Status){

    function Task(options){
        this.content = options.content || " ";
        this.autor = options.autor || getCurrentUser();
        this.assignee = options.assignee || getCurrentUser();
        this.date = options.date || getCurrentDate();
        this.status = options.status || Status.OPEN;

        function getCurrentUser(){
            return new User();
        }
        function getCurrentDate(){
            return (new Date()).getTime();
        }
    }
    return Task;

});