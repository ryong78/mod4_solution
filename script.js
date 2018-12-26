/*
Solution of assignment 4:
*/

(function() {
    var names = ["Abrahm", "Bred", "Hitler", "Jason", "Kadapi", "Zulu", "1st man", "박성용", "음하하", "냐구냐구", "Steve", "jacob"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toUpperCase();
        if (firstLetter === 'J') {
            byePrintout.speak(names[i]);
        } else {
            helloPrintout.speak(names[i]);
        }
    }
})();

(function(window) {
    var byePrintout = new Object();
    var printWord = "Good Bye";
    byePrintout.speak = function speak(name) {
        console.log(printWord + " " + name);
    };
    window.byePrintout = byePrintout;
})(window);

(function(window) {
    var helloPrintout = new Object();
    var printWord = "Hello";
    helloPrintout.speak = function(name) {
        console.log(printWord + " " + name);
    };
    window.helloPrintout = helloPrintout;
})(window);

