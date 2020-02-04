$(function() {
    $('form').on('submit', function() {
        event.preventDefault();
        let addedItem = $('#shopping-list-entry').val();
        $('.shopping-list').append('<li>' + addedItem + '</li>',).addClass('.shopping-item-controls');
    });
        
    //strike-through added item
    $('.shopping-item-toggle').on('click', function() {
        $('.shopping-list').css("text-decoration", "strike-through");
    });
    //remove deleted item
    $('.shopping-item-delete').on('click', function(){
        $(this).closest('li').remove();
    });
});