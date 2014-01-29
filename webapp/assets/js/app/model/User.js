define(function(){

    function User(name, email){
        this.name = name || "username";
        this.email = email || "unknown";
    }

    return User;
});