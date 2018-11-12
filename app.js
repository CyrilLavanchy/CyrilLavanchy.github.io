// Modal JS
//When the user clicks on the button, open the Modal
$(".showChart").click(function () {
    $(this).siblings(".chartModal").css("display","block");
});

//When the user clicks on <span> (x), close the Modal
$(".close").click(function () {
    $(this).parents(".modal").css("display","none");
});

//When the user clicks anywhere outside of the modal, close it
$(document).click(function(event) {
    //if you click on anything except the modal itself or the "open modal" button, close the modal
    if (!$(event.target).closest(".modal-content,.showChart").length) {
        $("body").find(".modal").css("display","none");
    }
});
