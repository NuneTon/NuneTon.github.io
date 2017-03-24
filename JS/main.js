$(document).ready(function() {
    $("#panel h1").click(function() {
        $(this).parent().find("ul").slideToggle("slow");
    });
});
