$(".button1").click(function() {
    $(".text").show();
    $(".text2").hide();
    $(".text3").hide();
});

$(".button2").click(function() {
    $(".text2").show();
    $(".text").hide();
    $(".text3").hide();
});

$(".button3").click(function() {
    $(".text3").show();
    $(".text").hide();
    $(".text2").hide();
});