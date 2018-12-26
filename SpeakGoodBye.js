(function(window) {
    var byePrintout = new Object();
    var printWord = "Good Bye";
    byePrintout.speak = function speak(name) {
        console.log(printWord + " " + name);
    };
    window.byePrintout = byePrintout;
})(window);
