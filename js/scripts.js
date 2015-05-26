var factorial = function(n) {
    if(n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

$(document).ready(function() {
    $("form#factorial-form").submit(function(event) {
        var n = parseInt($("input#n").val());
        var result = factorial(n);

        $(".n").text(n);
        $(".factorial").text(result);

        $("#result").show();
        event.preventDefault();
    });
});
