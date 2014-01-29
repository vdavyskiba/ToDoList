require.config({
    "baseUrl": "assets/js/app",
    "paths": {
              "text": "../../vendor/requirejs/text.min",
        "underscore": "../../vendor/underscore.min",
            "jquery": "../../vendor/jquery.min",
  "jquery.bootstrap": "../../vendor/bootstrap/bootstrap.min"


    },
    shim: {
        underscore: {
            exports: "_"
        },
        jquery: {
            exports: "$"
        },
        "jquery.bootstrap": {
            "deps": ["jquery"]
        }
    }
});

require(["underscore","jquery","jquery.bootstrap","main"]);