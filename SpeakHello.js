(function(window) {
    var helloPrintout = new Object();
    var printWord = "Hello";
    helloPrintout.speak = function(name) {
        console.log(printWord + " " + name);
    };
    window.helloPrintout = helloPrintout;
})(window);