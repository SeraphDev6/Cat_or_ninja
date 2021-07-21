$(document).ready(function(){
    $(".ninja").slideUp(0);
    $("img").click(function(){
        $(this).slideUp("fast");
        $($(this).attr("alt-id")).slideDown("fast")
    })
})